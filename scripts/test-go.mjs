import { cp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
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

const oauthTest = path.join(goRoot, 'oauth', 'authentication_middleware_test.go');
await cp(path.join(root, 'test', 'go', 'authentication_middleware_test.go'), oauthTest);
const exceptionDetailTestTemplate = await readFile(
  path.join(root, 'test', 'go', 'exception_detail_type_test.go.tmpl'),
  'utf8',
);
const exceptionDetailTests = [];
for (const name of moduleNames) {
  const moduleDir = path.join(goRoot, name);
  const entries = await readdir(moduleDir);
  if (!entries.includes('model_exception_detail_type.go')) continue;

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
  exceptionDetailTests.push(testPath);
}
const failures = [];

try {
  for (const name of moduleNames) {
    const cwd = path.join(goRoot, name);
    for (const args of [['mod', 'tidy'], ['test', './...']]) {
      const result = spawnSync('go', args, {
        cwd,
        encoding: 'utf8',
        env: {
          ...process.env,
          GOCACHE: goCache,
          GOMODCACHE: goModCache,
          GOWORK: 'off',
        },
        stdio: 'inherit',
      });
      if (result.status !== 0) {
        failures.push(`go/${name}: go ${args.join(' ')}`);
        break;
      }
    }
  }
} finally {
  await Promise.all([
    rm(oauthTest, { force: true }),
    ...exceptionDetailTests.map((testPath) => rm(testPath, { force: true })),
  ]);
}

if (failures.length > 0) {
  throw new Error(`Go module validation failed:\n- ${failures.join('\n- ')}`);
}

console.log(`Tested ${moduleNames.length} generated Go modules.`);
