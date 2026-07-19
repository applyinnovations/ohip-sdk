import { readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const generatedTypeScript = path.join(root, 'src', 'typescript-fetch');
const preservedFiles = new Set([
  'authenticationMiddleware.ts',
  'cashierMappingMiddleware.ts',
]);

await Promise.all([
  rm(path.join(root, 'dist'), { force: true, recursive: true }),
  rm(path.join(root, 'go'), { force: true, recursive: true }),
  rm(path.join(root, '.cache'), { force: true, recursive: true }),
]);

for (const entry of await readdir(generatedTypeScript, { withFileTypes: true })) {
  if (!preservedFiles.has(entry.name)) {
    await rm(path.join(generatedTypeScript, entry.name), {
      force: true,
      recursive: true,
    });
  }
}

console.log('Removed generated TypeScript, Go, and package output.');
