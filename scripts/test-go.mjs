import { cp, readdir, rm } from 'node:fs/promises';
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
  await rm(oauthTest, { force: true });
}

if (failures.length > 0) {
  throw new Error(`Go module validation failed:\n- ${failures.join('\n- ')}`);
}

console.log(`Tested ${moduleNames.length} generated Go modules.`);
