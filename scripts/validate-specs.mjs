import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'upstream.json')));
const docsDir = path.resolve(
  process.env.OHIP_DOCS_DIR || path.join(root, 'hospitality-api-docs'),
);
const specsDir = path.join(docsDir, manifest.specDirectory);

const prepare = spawnSync(process.execPath, [path.join(root, 'scripts', 'prepare-upstream.mjs'), docsDir], {
  encoding: 'utf8',
  stdio: 'inherit',
});
if (prepare.status !== 0) process.exit(prepare.status ?? 1);

const specs = (await readdir(specsDir))
  .filter((name) => name.endsWith('.json'))
  .sort();

if (specs.length === 0) throw new Error(`No OpenAPI specifications found in ${specsDir}`);

for (const name of specs) {
  JSON.parse(await readFile(path.join(specsDir, name), 'utf8'));
}

console.log(`Validated JSON syntax for ${specs.length} Oracle Property API specifications.`);
