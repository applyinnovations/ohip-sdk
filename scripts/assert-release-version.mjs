import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(await readFile(path.join(root, 'package.json')));
const generatorConfig = JSON.parse(await readFile(path.join(root, 'openapitools.json')));
const tag = process.env.RELEASE_TAG || process.argv[2];

if (!tag || tag !== `v${packageJson.version}`) {
  throw new Error(`Release tag ${tag || '<missing>'} does not match v${packageJson.version}.`);
}

const packageMajor = `v${packageJson.version.split('.')[0]}`;
const goModuleMajor = generatorConfig['generator-cli'].generators.go
  .additionalProperties.moduleMajorVersion;
if (packageMajor !== goModuleMajor) {
  throw new Error(
    `Package major ${packageMajor} does not match configured Go module major ${goModuleMajor}.`,
  );
}

console.log(`Release version verified: ${tag}`);
