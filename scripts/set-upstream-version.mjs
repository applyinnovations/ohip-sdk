import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const [release, ref, commit] = process.argv.slice(2);
if (!release || !ref || !/^[0-9a-f]{40}$/.test(commit || '')) {
  throw new Error('Usage: set-upstream-version.mjs <release> <ref> <40-character commit>');
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const upstreamPath = path.join(root, 'upstream.json');
const packagePath = path.join(root, 'package.json');
const upstream = JSON.parse(await readFile(upstreamPath));
const packageJson = JSON.parse(await readFile(packagePath));

upstream.release = release;
upstream.ref = ref;
upstream.commit = commit;
packageJson.ohip.release = release;
packageJson.ohip.upstreamCommit = commit;

await Promise.all([
  writeFile(upstreamPath, `${JSON.stringify(upstream, null, 2)}\n`),
  writeFile(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`),
]);

console.log(`Updated Oracle source manifest to ${release} (${commit}).`);
