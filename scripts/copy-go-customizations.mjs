import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'src', 'go', 'oauth', 'authentication_middleware.go');
const destinationDir = path.join(root, 'go', 'oauth');

await mkdir(destinationDir, { recursive: true });
await cp(source, path.join(destinationDir, 'authentication_middleware.go'));

for (const entry of await readdir(path.join(root, 'go'), { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const moduleDir = path.join(root, 'go', entry.name);
  await Promise.all([
    rm(path.join(moduleDir, '.openapi-generator'), { force: true, recursive: true }),
    rm(path.join(moduleDir, '.openapi-generator-ignore'), { force: true }),
    rm(path.join(moduleDir, '.travis.yml'), { force: true }),
    rm(path.join(moduleDir, '.gitignore'), { force: true }),
    rm(path.join(moduleDir, 'api'), { force: true, recursive: true }),
    rm(path.join(moduleDir, 'docs'), { force: true, recursive: true }),
    rm(path.join(moduleDir, 'git_push.sh'), { force: true }),
    rm(path.join(moduleDir, 'test'), { force: true, recursive: true }),
  ]);

  const readmePath = path.join(moduleDir, 'README.md');
  const readme = await readFile(readmePath, 'utf8');
  const oldImport = `github.com/applyinnovations/ohip-sdk/${entry.name}`;
  const newImport = `github.com/applyinnovations/ohip-sdk/go/${entry.name}/v2`;
  await writeFile(readmePath, readme.replaceAll(oldImport, newImport));
}

console.log('Applied custom Go OAuth middleware.');
