import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { SCRIPTS, run, tempDir } from './helpers.mjs';

// The variables GitHub Actions sets for a job with id-token: write.
const OIDC = {
  ACTIONS_ID_TOKEN_REQUEST_URL: 'https://token.actions.example.invalid',
  ACTIONS_ID_TOKEN_REQUEST_TOKEN: 'request-token',
};

// A release tarball plus an `npm` stub that logs its arguments and whether it
// saw the OIDC request variables. NPM_VERSION sets `npm --version`,
// PUBLISHED=1 makes `npm view` succeed and PUBLISH_STATUS is the exit status
// of `npm publish`.
function fixture(
  t,
  { name = '@applyinnovations/ohip-sdk', version = '1.2.3' } = {},
) {
  const dir = tempDir(t);
  const artifacts = path.join(dir, 'artifacts');
  mkdirSync(path.join(dir, 'package'), { recursive: true });
  mkdirSync(artifacts);
  writeFileSync(
    path.join(dir, 'package', 'package.json'),
    JSON.stringify({ name, version }),
  );
  execFileSync('tar', [
    '-czf',
    path.join(artifacts, 'applyinnovations-ohip-sdk-1.2.3.tgz'),
    '-C',
    dir,
    'package',
  ]);
  const bin = path.join(dir, 'bin');
  mkdirSync(bin);
  const log = path.join(dir, 'npm.log');
  writeFileSync(
    path.join(bin, 'npm'),
    `#!/bin/sh
if [ "$1" = --version ]; then echo "\${NPM_VERSION:-11.19.1}"; exit; fi
echo "$*" >> "${log}"
if [ "$1" = view ]; then [ "$PUBLISHED" = 1 ]; exit; fi
echo "oidc=$ACTIONS_ID_TOKEN_REQUEST_URL" >> "${log}"
exit "\${PUBLISH_STATUS:-0}"
`,
  );
  chmodSync(path.join(bin, 'npm'), 0o755);
  const publish = (env = {}) =>
    // A relative artifacts directory, as the workflow passes it.
    run('node', [path.join(SCRIPTS, 'publish-npm.mjs'), 'v1.2.3', 'artifacts'], {
      cwd: dir,
      env: { PATH: `${bin}:${process.env.PATH}`, ...env },
    });
  return { publish, npmLog: () => readFileSync(log, 'utf8') };
}

test('publish-npm publishes the tarball with provenance through OIDC', (t) => {
  const { publish, npmLog } = fixture(t);
  const result = publish(OIDC);
  assert.equal(result.status, 0, result.stderr);
  const log = npmLog();
  assert.match(log, /^view @applyinnovations\/ohip-sdk@1.2.3 version$/m);
  assert.match(
    log,
    /^publish \/\S*\/artifacts\/applyinnovations-ohip-sdk-1.2.3.tgz --access public --provenance --ignore-scripts$/m,
  );
  assert.match(log, /^oidc=https:\/\/token.actions.example.invalid$/m);
  assert.match(result.stdout, /Published @applyinnovations\/ohip-sdk@1.2.3/);
});

test('publish-npm skips a version that is already published', (t) => {
  const { publish, npmLog } = fixture(t);
  const result = publish({ ...OIDC, PUBLISHED: '1' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /already published/);
  assert.doesNotMatch(npmLog(), /^publish /m);
});

test('publish-npm refuses to publish without an Actions OIDC token', (t) => {
  const { publish, npmLog } = fixture(t);
  const result = publish({
    ACTIONS_ID_TOKEN_REQUEST_URL: '',
    ACTIONS_ID_TOKEN_REQUEST_TOKEN: '',
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /no GitHub Actions OIDC token/);
  assert.doesNotMatch(npmLog(), /^publish /m);
});

test('publish-npm fails when npm publish fails', (t) => {
  const { publish } = fixture(t);
  const result = publish({ ...OIDC, PUBLISH_STATUS: '1' });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /npm publish exited 1/);
  assert.doesNotMatch(result.stdout, /Published/);
});

test('publish-npm refuses an npm without trusted publishing', (t) => {
  const { publish } = fixture(t);
  for (const version of ['11.5.0', '10.9.8']) {
    const result = publish({ ...OIDC, NPM_VERSION: version });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /needs npm >= 11.5.1/);
  }
  for (const version of ['11.5.1', '12.0.0']) {
    assert.equal(publish({ ...OIDC, NPM_VERSION: version }).status, 0);
  }
});

test('publish-npm refuses a tarball for another package or version', (t) => {
  for (const packed of [{ name: 'other' }, { version: '1.2.4' }]) {
    const { publish } = fixture(t, packed);
    const result = publish(OIDC);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /expected @applyinnovations\/ohip-sdk@1.2.3/);
  }
});
