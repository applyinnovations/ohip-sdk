// Usage: node scripts/ci/publish-npm.mjs <tag> <artifacts-dir>
// Publishes the release build's tarball to npm with npm trusted publishing:
// it runs in the GitHub Actions workflow .github/workflows/npm-publish.yml,
// whose OIDC token npm exchanges for a short-lived publish credential, so no
// npm token exists anywhere. npm attaches provenance for the workflow run.
// A version already on the registry is skipped.
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { runMain, tarballName } from './lib.mjs';

export const PACKAGE = '@applyinnovations/ohip-sdk';
// The first npm with trusted publishing.
const MIN_NPM = [11, 5, 1];

function run(command, args, options = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', ...options });
  if (result.error) throw result.error;
  return result;
}

function checkNpmVersion() {
  const found = run('npm', ['--version']).stdout.trim();
  const parts = found.split(/[.-]/).slice(0, 3).map(Number);
  let supported = parts.length === 3 && !parts.some(Number.isNaN);
  for (let i = 0; supported && i < 3; i++) {
    if (parts[i] !== MIN_NPM[i]) {
      supported = parts[i] > MIN_NPM[i];
      break;
    }
  }
  if (!supported)
    throw new Error(
      `npm ${found} cannot use trusted publishing; it needs npm >= ${MIN_NPM.join('.')}`,
    );
}

export function publish({
  tag,
  artifacts,
  env = process.env,
  log = console.log,
}) {
  const version = tag.slice(1);
  // Absolute: npm reads a relative `dir/file.tgz` as a GitHub `owner/repo`
  // shorthand and tries to clone it.
  const tarball = path.resolve(artifacts, tarballName(tag));
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
  checkNpmVersion();
  if (run('npm', ['view', `${PACKAGE}@${version}`, 'version']).status === 0) {
    log(`${PACKAGE}@${version} is already published.`);
    return;
  }
  // Without these npm has no OIDC token to exchange and fails with a less
  // helpful authentication error.
  if (!env.ACTIONS_ID_TOKEN_REQUEST_URL || !env.ACTIONS_ID_TOKEN_REQUEST_TOKEN)
    throw new Error(
      'no GitHub Actions OIDC token: publish from npm-publish.yml with id-token: write',
    );
  const published = run(
    'npm',
    [
      'publish',
      tarball,
      '--access',
      'public',
      '--provenance',
      '--ignore-scripts',
    ],
    { stdio: 'inherit', env },
  );
  if (published.status !== 0)
    throw new Error(`npm publish exited ${published.status}`);
  log(`Published ${PACKAGE}@${version} with provenance.`);
}

runMain(import.meta, async () => {
  const [tag, artifacts] = process.argv.slice(2);
  if (!tag || !artifacts)
    throw new Error('usage: publish-npm.mjs <tag> <artifacts-dir>');
  publish({ tag, artifacts });
});
