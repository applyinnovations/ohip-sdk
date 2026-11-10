// Usage: NPM_TOKEN_FILE=<file> node scripts/ci/publish-npm.mjs <tag> <artifacts-dir>
// Holds the npm token, so the release pipeline runs it from its own checkout of
// main, never the build's workspace.
// Publishes the build's tarball with a granular access token (npm trusted
// publishing and provenance need GitHub-hosted runners). A version already on
// the registry is skipped.
import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { runMain, tarballName } from './lib.mjs';

export const PACKAGE = '@applyinnovations/ohip-sdk';

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', ...options });
  if (result.error) throw result.error;
  return result;
}

export function publish({ tag, artifacts, tokenFile, log = console.log }) {
  const version = tag.slice(1);
  const tarball = path.join(artifacts, tarballName(tag));
  const listed = run('tar', ['-xzOf', tarball, 'package/package.json']);
  if (listed.status !== 0)
    throw new Error(
      `cannot read package.json from ${tarball}: ${listed.stderr}`,
    );
  const packed = JSON.parse(listed.stdout);
  if (packed.name !== PACKAGE || packed.version !== version) {
    throw new Error(
      `tarball is ${packed.name}@${packed.version}, expected ${PACKAGE}@${version}`,
    );
  }
  if (run('npm', ['view', `${PACKAGE}@${version}`, 'version']).status === 0) {
    log(`${PACKAGE}@${version} is already published.`);
    return;
  }
  // The token reaches npm only through the environment; the config file holds
  // a reference to it.
  const token = readFileSync(tokenFile, 'utf8').trim();
  const dir = mkdtempSync(path.join(tmpdir(), 'npm-publish-'));
  try {
    const userconfig = path.join(dir, '.npmrc');
    writeFileSync(
      userconfig,
      '//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n',
      { mode: 0o600 },
    );
    const published = run(
      'npm',
      [
        'publish',
        tarball,
        '--userconfig',
        userconfig,
        '--access',
        'public',
        '--provenance=false',
        '--ignore-scripts',
      ],
      { stdio: 'inherit', env: { ...process.env, NPM_TOKEN: token } },
    );
    if (published.status !== 0)
      throw new Error(`npm publish exited ${published.status}`);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  log(`Published ${PACKAGE}@${version}.`);
}

runMain(import.meta, async () => {
  const [tag, artifacts] = process.argv.slice(2);
  if (!tag || !artifacts)
    throw new Error('usage: publish-npm.mjs <tag> <artifacts-dir>');
  if (!process.env.NPM_TOKEN_FILE)
    throw new Error('NPM_TOKEN_FILE must name the npm token file');
  publish({ tag, artifacts, tokenFile: process.env.NPM_TOKEN_FILE });
});
