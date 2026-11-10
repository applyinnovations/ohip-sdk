import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { SCRIPTS, git, repositories, run } from './helpers.mjs';

const TAG = 'v1.2.3';

test('check-release-tag accepts only a vX.Y.Z tag on a commit on main', (t) => {
  const { work } = repositories(t);
  git(work, 'fetch', '--quiet', 'origin');
  const main = git(work, 'rev-parse', 'HEAD');
  git(work, 'tag', TAG);
  git(work, 'tag', 'v01.2.3');
  git(work, 'switch', '--quiet', '--create', 'side');
  git(work, 'commit', '--quiet', '--allow-empty', '-m', 'not on main');
  const side = git(work, 'rev-parse', 'HEAD');
  git(work, 'tag', 'v9.9.9');
  const check = (tag, revision) =>
    run(path.join(SCRIPTS, 'check-release-tag.sh'), [tag, revision], {
      cwd: work,
    });

  assert.equal(check(TAG, main).status, 0);
  assert.match(check('v01.2.3', main).stderr, /not vMAJOR.MINOR.PATCH/);
  assert.match(check('v1.2.3-rc.1', main).stderr, /not vMAJOR.MINOR.PATCH/);
  assert.match(check(TAG, side).stderr, /does not point at/);
  assert.match(check('v4.5.6', main).stderr, /does not point at/);
  const offMain = check('v9.9.9', side);
  assert.equal(offMain.status, 2);
  assert.match(offMain.stderr, /is not on main/);
});

// The release build's output: generated/<tag> one commit on the tag, a go-tags
// list and a bundle of both, as scripts/ci/release-build.sh writes them.
function build(t, { content = 'generated', modules = ['alpha', 'beta'] } = {}) {
  const repos = repositories(t);
  const { work, dir } = repos;
  git(work, 'tag', TAG);
  git(work, 'push', '--quiet', 'origin', TAG);
  git(work, 'switch', '--quiet', '--create', `generated/${TAG}`);
  writeFileSync(path.join(work, 'go.txt'), content);
  git(work, 'add', 'go.txt');
  git(work, 'commit', '--quiet', '-m', 'generated');
  const tags = modules.map((module) => `go/${module}/${TAG}`);
  for (const tag of tags) git(work, 'tag', '--annotate', tag, '-m', tag);
  const artifacts = path.join(dir, 'artifacts');
  git(dir, 'init', '--quiet', artifacts);
  writeFileSync(
    path.join(artifacts, 'go-tags'),
    tags.map((tag) => `${tag}\n`).join(''),
  );
  git(
    work,
    'bundle',
    'create',
    '--quiet',
    path.join(artifacts, 'go-modules.bundle'),
    `^${TAG}`,
    `refs/heads/generated/${TAG}`,
    ...tags.map((tag) => `refs/tags/${tag}`),
  );
  return { ...repos, artifacts, tags };
}

function pushGoModules({ artifacts, originUrl, dir }) {
  const credentials = path.join(dir, 'git-credentials');
  writeFileSync(credentials, '');
  return run(
    path.join(SCRIPTS, 'push-go-modules.sh'),
    [TAG, artifacts, originUrl],
    {
      cwd: dir,
      env: { GIT_CREDENTIALS: credentials },
    },
  );
}

test('push-go-modules pushes the branch and module tags, then accepts the same release', (t) => {
  const fixture = build(t);
  const first = pushGoModules(fixture);
  assert.equal(first.status, 0, first.stderr);
  const head = git(fixture.origin, 'rev-parse', `refs/heads/generated/${TAG}`);
  for (const tag of fixture.tags)
    assert.equal(git(fixture.origin, 'rev-list', '-n', '1', tag), head);

  const again = pushGoModules(fixture);
  assert.equal(again.status, 0, again.stderr);
  assert.match(again.stdout, /already exists and matches/);
});

test('push-go-modules refuses a release that differs from the published one', (t) => {
  const fixture = build(t);
  // Someone else's generated/<tag> with other content.
  git(fixture.dir, 'clone', '--quiet', fixture.origin, 'other');
  const other = path.join(fixture.dir, 'other');
  git(other, 'switch', '--quiet', '--create', `generated/${TAG}`, TAG);
  writeFileSync(path.join(other, 'go.txt'), 'different');
  git(other, 'add', 'go.txt');
  git(other, 'commit', '--quiet', '-m', 'different');
  git(other, 'push', '--quiet', 'origin', `generated/${TAG}`);

  const result = pushGoModules(fixture);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /not reproducible/);
});

test('push-go-modules refuses a partial release', (t) => {
  const fixture = build(t);
  git(fixture.work, 'push', '--quiet', 'origin', fixture.tags[0]);
  const result = pushGoModules(fixture);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /refusing a partial release/);
  assert.equal(
    run('git', [
      'ls-remote',
      '--exit-code',
      '--heads',
      fixture.origin,
      `generated/${TAG}`,
    ]).status,
    2,
  );
});

test('push-go-modules rejects a module tag for another version', (t) => {
  const fixture = build(t);
  writeFileSync(path.join(fixture.artifacts, 'go-tags'), 'go/alpha/v1.2.4\n');
  const result = pushGoModules(fixture);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /unexpected module tag/);
});

// upstream-candidate.sh's output for a passing candidate.
function candidate(t, content = 'updated') {
  const repos = repositories(t);
  const { work, dir } = repos;
  const revision = git(work, 'rev-parse', 'HEAD');
  const branch = 'automation/oracle-26.3';
  git(work, 'switch', '--quiet', '--create', branch);
  writeFileSync(path.join(work, 'upstream.json'), content);
  git(work, 'add', 'upstream.json');
  git(work, 'commit', '--quiet', '-m', 'update');
  const artifacts = path.join(dir, 'artifacts');
  git(dir, 'init', '--quiet', artifacts);
  writeFileSync(path.join(artifacts, 'status'), 'passed\n');
  writeFileSync(path.join(artifacts, 'release'), '26.3\n');
  git(
    work,
    'bundle',
    'create',
    '--quiet',
    path.join(artifacts, 'update.bundle'),
    `^${revision}`,
    `refs/heads/${branch}`,
  );
  git(work, 'switch', '--quiet', 'main');
  return { ...repos, artifacts, revision, branch };
}

function pushCandidate({ artifacts, revision, originUrl, dir }) {
  const credentials = path.join(dir, 'git-credentials');
  writeFileSync(credentials, '');
  return run(
    path.join(SCRIPTS, 'push-upstream-candidate.sh'),
    [artifacts, revision, originUrl],
    {
      cwd: dir,
      env: { GIT_CREDENTIALS: credentials },
    },
  );
}

test('push-upstream-candidate pushes a passing candidate once', (t) => {
  const fixture = candidate(t);
  const first = pushCandidate(fixture);
  assert.equal(first.status, 0, first.stderr);
  assert.equal(
    git(fixture.origin, 'rev-parse', fixture.branch),
    git(fixture.work, 'rev-parse', fixture.branch),
  );
  const again = pushCandidate(fixture);
  assert.equal(again.status, 0, again.stderr);
  assert.match(again.stdout, /already holds this update/);
});

test('push-upstream-candidate pushes nothing unless the candidate passed', (t) => {
  const fixture = candidate(t);
  writeFileSync(path.join(fixture.artifacts, 'status'), 'failed\n');
  assert.equal(pushCandidate(fixture).status, 0);
  assert.equal(
    run('git', [
      'ls-remote',
      '--exit-code',
      '--heads',
      fixture.origin,
      fixture.branch,
    ]).status,
    2,
  );
});

test('push-upstream-candidate rejects a release name that is not a plain ref component', (t) => {
  const fixture = candidate(t);
  writeFileSync(path.join(fixture.artifacts, 'release'), '../main\n');
  const result = pushCandidate(fixture);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /unexpected release/);
});
