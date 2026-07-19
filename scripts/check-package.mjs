import { access, mkdtemp, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const temporary = await mkdtemp(path.join(os.tmpdir(), 'ohip-sdk-pack-'));
const npmCache = path.join(os.tmpdir(), 'ohip-sdk-npm-cache');

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd || root,
      env: { ...process.env, npm_config_cache: npmCache },
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(stderr || stdout || `${command} failed`));
    });
  });
}

async function walk(directory, relativeTo = root) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute, relativeTo));
    else files.push(path.relative(relativeTo, absolute));
  }
  return files;
}

const packageJson = JSON.parse(await readFile(path.join(root, 'package.json')));
const paths = await walk(path.join(root, 'dist', 'typescript-fetch'));

if (paths.some((candidate) => candidate.endsWith('.tsbuildinfo'))) {
  throw new Error('Compiled TypeScript output contains a .tsbuildinfo file.');
}

for (const required of [
  'LICENSE',
  'README.md',
  'THIRD_PARTY_NOTICES.md',
  'dist/typescript-fetch/oauth/index.js',
  'dist/typescript-fetch/oauth/index.d.ts',
  'dist/typescript-fetch/authenticationMiddleware.js',
]) {
  await access(path.join(root, required));
}

let unpackedSize = 0;
for (const relativePath of paths) {
  unpackedSize += (await stat(path.join(root, relativePath))).size;
}
if (unpackedSize > 120_000_000) {
  throw new Error(`Unpacked npm output is too large: ${unpackedSize} bytes`);
}

await run('npm', ['pack', '--silent', '--ignore-scripts', '--pack-destination', temporary]);
const filename = `${packageJson.name.replace(/^@/, '').replace('/', '-')}-${packageJson.version}.tgz`;
const tarball = path.join(temporary, filename);
const packedSize = (await stat(tarball)).size;

await writeFile(
  path.join(temporary, 'package.json'),
  JSON.stringify({ private: true }, null, 2),
);
await run('npm', ['install', '--ignore-scripts', '--no-package-lock', tarball], {
  cwd: temporary,
});

await writeFile(
  path.join(temporary, 'smoke.cjs'),
  "const assert = require('node:assert/strict');\n" +
    "require('@applyinnovations/ohip-sdk/oauth');\n" +
    "require('@applyinnovations/ohip-sdk/authenticationMiddleware');\n" +
    "assert.throws(() => require('@applyinnovations/ohip-sdk/dist/typescript-fetch/oauth'));\n",
);
await run(process.execPath, [path.join(temporary, 'smoke.cjs')], { cwd: temporary });

await writeFile(
  path.join(temporary, 'smoke.ts'),
  "import { Configuration } from '@applyinnovations/ohip-sdk/crm';\n" +
    "import { OhipCredentialsProvider } from '@applyinnovations/ohip-sdk/authenticationMiddleware';\n" +
    'void Configuration; void OhipCredentialsProvider;\n',
);
await run(
  path.join(root, 'node_modules', '.bin', 'tsc'),
  [
    '--noEmit',
    '--strict',
    '--target',
    'ES2022',
    '--module',
    'CommonJS',
    '--moduleResolution',
    'node',
    path.join(temporary, 'smoke.ts'),
  ],
  { cwd: temporary },
);

console.log(
  `Verified ${packageJson.name}@${packageJson.version}: ${paths.length} compiled files, ` +
    `${packedSize} bytes packed, ${unpackedSize} bytes unpacked.`,
);
