import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const goRoot = path.join(root, 'go');
const goCache = path.join(os.tmpdir(), 'ohip-sdk-go-cache');
const goModCache = path.join(os.tmpdir(), 'ohip-sdk-go-mod-cache');
const moduleNames = (await readdir(goRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (moduleNames.length === 0) throw new Error('No generated Go modules found.');

const concurrency = Math.max(
  1,
  Math.min(
    Number.parseInt(process.env.OHIP_GO_JOBS || '', 10) ||
      os.availableParallelism(),
    8,
    moduleNames.length,
  ),
);

function runGo(args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn('go', args, {
      cwd,
      env: {
        ...process.env,
        GOCACHE: goCache,
        GOMODCACHE: goModCache,
        GOWORK: 'off',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    child.stdout.on('data', (chunk) => { output += chunk; });
    child.stderr.on('data', (chunk) => { output += chunk; });
    child.on('error', reject);
    child.on('close', (status) => resolve({ status, output }));
  });
}

const oauthTest = path.join(goRoot, 'oauth', 'authentication_middleware_test.go');
await cp(path.join(root, 'test', 'go', 'authentication_middleware_test.go'), oauthTest);
const exceptionDetailTestTemplate = await readFile(
  path.join(root, 'test', 'go', 'exception_detail_type_test.go.tmpl'),
  'utf8',
);
const exceptionDetailTests = (
  await Promise.all(
    moduleNames.map(async (name) => {
      const moduleDir = path.join(goRoot, name);
      const entries = await readdir(moduleDir);
      if (!entries.includes('model_exception_detail_type.go')) return null;

      const model = await readFile(
        path.join(moduleDir, 'model_exception_detail_type.go'),
        'utf8',
      );
      const packageName = model.match(/^package (\w+)$/m)?.[1];
      if (!packageName) throw new Error(`Unable to determine package for go/${name}.`);

      const testPath = path.join(moduleDir, 'exception_detail_type_test.go');
      await writeFile(
        testPath,
        exceptionDetailTestTemplate.replace('{{PACKAGE}}', packageName),
      );
      return testPath;
    }),
  )
).filter(Boolean);

const results = new Array(moduleNames.length);
const failures = [];

try {
  let cursor = 0;
  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= moduleNames.length) return;
      const name = moduleNames[index];
      const cwd = path.join(goRoot, name);
      let combined = '';
      let failed = null;
      for (const args of [['mod', 'tidy'], ['test', './...']]) {
        const res = await runGo(args, cwd);
        combined += res.output;
        if (res.status !== 0) {
          failed = `go/${name}: go ${args.join(' ')}`;
          break;
        }
      }
      results[index] = { combined, failed };
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
} finally {
  await Promise.all([
    rm(oauthTest, { force: true }),
    ...exceptionDetailTests.map((testPath) => rm(testPath, { force: true })),
  ]);
}

for (const result of results) {
  if (result.combined) process.stdout.write(result.combined);
  if (result.failed) failures.push(result.failed);
}

if (failures.length > 0) {
  throw new Error(`Go module validation failed:\n- ${failures.join('\n- ')}`);
}

console.log(`Tested ${moduleNames.length} generated Go modules.`);
