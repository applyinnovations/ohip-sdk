import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(await readFile(path.join(root, 'package.json')));
const tag = process.env.RELEASE_TAG || process.argv[2];

if (!tag || tag !== `v${packageJson.version}`) {
  throw new Error(`Release tag ${tag || '<missing>'} does not match v${packageJson.version}.`);
}

if (packageJson.version.split('.')[0] !== '2') {
  throw new Error('Go module paths are currently configured for SDK major version 2.');
}

console.log(`Release version verified: ${tag}`);
