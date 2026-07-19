import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const goRoot = path.join(root, 'go');

for (const entry of (await readdir(goRoot, { withFileTypes: true }))
  .filter((candidate) => candidate.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))) {
  const goMod = await readFile(path.join(goRoot, entry.name, 'go.mod'), 'utf8');
  const modulePath = goMod.match(/^module\s+(\S+)$/m)?.[1];
  if (!modulePath) throw new Error(`go/${entry.name}/go.mod has no module directive`);
  console.log(`${entry.name}\t${modulePath}`);
}
