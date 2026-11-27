import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

function runNpm(scriptName) {
  return new Promise((resolve, reject) => {
    const child = spawn(npmCmd, ['run', scriptName], {
      cwd: root,
      stdio: 'inherit',
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`npm run ${scriptName} exited with code ${code}`));
    });
  });
}

await runNpm('clean');
await runNpm('specs:validate');
await runNpm('generate');

// After generation, Go module validation only reads go/, while TypeScript
// compilation/testing/packing only touch src/typescript-fetch and dist/.
await Promise.all([
  runNpm('test:go'),
  (async () => {
    await runNpm('compile');
    await Promise.all([
      runNpm('test'),
      runNpm('pack:check'),
    ]);
  })(),
]);
