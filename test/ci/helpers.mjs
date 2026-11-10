import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SCRIPTS = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../scripts/ci',
);

// Git isolated from the user's configuration, with a fixed identity.
export const GIT_ENV = {
  ...process.env,
  GIT_CONFIG_GLOBAL: '/dev/null',
  GIT_CONFIG_NOSYSTEM: '1',
  GIT_AUTHOR_NAME: 'test',
  GIT_AUTHOR_EMAIL: 'test@example.invalid',
  GIT_COMMITTER_NAME: 'test',
  GIT_COMMITTER_EMAIL: 'test@example.invalid',
};

export function tempDir(t) {
  const dir = mkdtempSync(path.join(tmpdir(), 'ohip-ci-test-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));
  return dir;
}

export function git(cwd, ...args) {
  return execFileSync('git', args, {
    cwd,
    env: GIT_ENV,
    encoding: 'utf8',
  }).trim();
}

// Runs a script and returns { status, stdout, stderr } without throwing.
export function run(command, args, { cwd, env = {} } = {}) {
  const result = spawnSync(command, args, {
    cwd,
    env: { ...GIT_ENV, ...env },
    encoding: 'utf8',
  });
  if (result.error) throw result.error;
  return result;
}

// A work repository with one commit on main, and a bare origin holding it.
export function repositories(t) {
  const dir = tempDir(t);
  const work = path.join(dir, 'work');
  const origin = path.join(dir, 'origin.git');
  git(dir, 'init', '--quiet', '--bare', '--initial-branch=main', origin);
  git(dir, 'init', '--quiet', '--initial-branch=main', work);
  git(work, 'commit', '--quiet', '--allow-empty', '-m', 'release');
  git(work, 'remote', 'add', 'origin', origin);
  git(work, 'push', '--quiet', 'origin', 'main');
  return { dir, work, origin, originUrl: `file://${origin}` };
}
