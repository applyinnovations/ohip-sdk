import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { chmodSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { SCRIPTS, run, tempDir } from './helpers.mjs';

// A release tarball plus an `npm` stub that logs its arguments, the token it
// was given and the config file it read; `npm view` succeeds when PUBLISHED=1.
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
echo "$*" >> "${log}"
if [ "$1" = view ]; then [ "$PUBLISHED" = 1 ]; exit; fi
echo "token=$NPM_TOKEN" >> "${log}"
cat "$4" >> "${log}"
`,
  );
  chmodSync(path.join(bin, 'npm'), 0o755);
  const tokenFile = path.join(dir, 'token');
  writeFileSync(tokenFile, 'npm_secret\n');
  const publish = (env = {}) =>
    run('node', [path.join(SCRIPTS, 'publish-npm.mjs'), 'v1.2.3', artifacts], {
      env: {
        PATH: `${bin}:${process.env.PATH}`,
        NPM_TOKEN_FILE: tokenFile,
        ...env,
      },
    });
  return { publish, npmLog: () => readFileSync(log, 'utf8') };
}

test('publish-npm publishes the tarball with the token only in the environment', (t) => {
  const { publish, npmLog } = fixture(t);
  const result = publish();
  assert.equal(result.status, 0, result.stderr);
  const log = npmLog();
  assert.match(log, /^view @applyinnovations\/ohip-sdk@1.2.3 version$/m);
  assert.match(
    log,
    /^publish .*applyinnovations-ohip-sdk-1.2.3.tgz --userconfig .* --access public --provenance=false --ignore-scripts$/m,
  );
  assert.match(log, /^token=npm_secret$/m);
  assert.match(log, /^\/\/registry.npmjs.org\/:_authToken=\$\{NPM_TOKEN\}$/m);
});

test('publish-npm skips a version that is already published', (t) => {
  const { publish, npmLog } = fixture(t);
  const result = publish({ PUBLISHED: '1' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /already published/);
  assert.doesNotMatch(npmLog(), /publish/);
});

test('publish-npm refuses a tarball for another package or version', (t) => {
  for (const packed of [{ name: 'other' }, { version: '1.2.4' }]) {
    const { publish } = fixture(t, packed);
    const result = publish();
    assert.equal(result.status, 1);
    assert.match(result.stderr, /expected @applyinnovations\/ohip-sdk@1.2.3/);
  }
});
