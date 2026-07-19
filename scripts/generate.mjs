import { open, readFile } from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const executable = path.join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'openapi-generator-cli.cmd' : 'openapi-generator-cli',
);
const logPath = path.join(root, 'build.log');
const log = await open(logPath, 'w');

let exitCode;
try {
  exitCode = await new Promise((resolve, reject) => {
    const child = spawn(executable, ['generate'], {
      cwd: root,
      env: {
        ...process.env,
        JAVA_OPTS: process.env.JAVA_OPTS || '-Xmx4g',
      },
      stdio: ['ignore', log.fd, log.fd],
    });
    child.on('error', reject);
    child.on('close', resolve);
  });
} finally {
  await log.close();
}

const output = await readFile(logPath, 'utf8');
if (exitCode !== 0) {
  const lines = output.trimEnd().split('\n');
  console.error(lines.slice(-100).join('\n'));
  throw new Error(`OpenAPI generation failed; see ${logPath}`);
}

const parserFailures = output
  .split('\n')
  .filter((line) => /Exception while parsing:|JsonParseException|JsonMappingException/.test(line));
if (parserFailures.length > 0) {
  console.error(parserFailures.join('\n'));
  throw new Error(`OpenAPI Generator reported schema parser failures; see ${logPath}`);
}

await import('./copy-go-customizations.mjs');
console.log(`Generated TypeScript and Go clients. Full output: ${logPath}`);
