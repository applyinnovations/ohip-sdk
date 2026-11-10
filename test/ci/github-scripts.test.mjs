import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { attach } from '../../scripts/ci/attach-release-asset.mjs';
import { github } from '../../scripts/ci/github.mjs';
import { report } from '../../scripts/ci/report-upstream-candidate.mjs';
import { latestRelease } from '../../scripts/ci/oracle-latest-release.mjs';
import { tempDir } from './helpers.mjs';

// A fake GitHub: answers each request from routes keyed by "METHOD path" and
// records it.
function fakeGitHub(routes) {
  const calls = [];
  async function request(pathOrUrl, init = {}) {
    const method = init.method || 'GET';
    calls.push({ method, path: pathOrUrl, body: init.body });
    const route = routes[`${method} ${pathOrUrl}`];
    if (!route) throw new Error(`unexpected ${method} ${pathOrUrl}`);
    const response = typeof route === 'function' ? route(init) : route;
    if (
      response.status >= 400 &&
      !(init.allow || []).includes(response.status)
    ) {
      throw new Error(`${method} ${pathOrUrl}: ${response.status}`);
    }
    return response;
  }
  return { request, calls };
}

const ok = (body) => ({ status: 200, body });
const TAG = 'v1.2.3';
const ASSET = 'applyinnovations-ohip-sdk-1.2.3.tgz';
const UPLOAD =
  'https://uploads.github.com/repos/applyinnovations/ohip-sdk/releases/7/assets';

function artifacts(t) {
  const dir = tempDir(t);
  writeFileSync(path.join(dir, ASSET), 'tarball');
  return dir;
}

test('github() sends the token, accepts listed statuses and rejects others', async () => {
  const seen = [];
  const fetch = async (url, init) => {
    seen.push({ url, init });
    return new Response(url.endsWith('/missing') ? 'gone' : '{"ok":true}', {
      status: url.endsWith('/missing') ? 404 : 200,
    });
  };
  const request = github({ token: 'secret', fetch });
  assert.deepEqual((await request('/releases')).body, { ok: true });
  assert.equal(
    seen[0].url,
    'https://api.github.com/repos/applyinnovations/ohip-sdk/releases',
  );
  assert.equal(seen[0].init.headers.authorization, 'Bearer secret');
  assert.equal((await request('/missing', { allow: [404] })).status, 404);
  await assert.rejects(request('/missing'), /GET .*\/missing: 404 gone/);
  await request(`${UPLOAD}?name=x`, { method: 'POST' });
  assert.equal(seen.at(-1).url, `${UPLOAD}?name=x`);
});

test('attach creates a missing release and uploads the tarball', async (t) => {
  const { request, calls } = fakeGitHub({
    [`GET /releases/tags/${TAG}`]: { status: 404, body: null },
    'POST /releases': ok({
      assets: [],
      upload_url: `${UPLOAD}{?name,label}`,
      html_url: 'release',
    }),
    [`POST ${UPLOAD}?name=${ASSET}`]: ok({}),
  });
  await attach({ tag: TAG, artifacts: artifacts(t), request, log: () => {} });
  assert.deepEqual(JSON.parse(calls[1].body), { tag_name: TAG, name: TAG });
  assert.equal(calls[2].body.toString(), 'tarball');
});

test('attach leaves an already attached tarball alone', async (t) => {
  const { request, calls } = fakeGitHub({
    [`GET /releases/tags/${TAG}`]: ok({
      assets: [{ name: ASSET }],
      upload_url: UPLOAD,
      html_url: 'release',
    }),
  });
  await attach({ tag: TAG, artifacts: artifacts(t), request, log: () => {} });
  assert.equal(calls.length, 1);
});

test('attach rejects a tag that is not vX.Y.Z before calling GitHub', async (t) => {
  const { request, calls } = fakeGitHub({});
  await assert.rejects(
    attach({ tag: 'v1.2', artifacts: artifacts(t), request }),
    /not vX.Y.Z/,
  );
  assert.equal(calls.length, 0);
});

function candidate(t, status) {
  const dir = tempDir(t);
  const files = { status, release: '26.3', ref: 'v26.3', commit: 'abc123' };
  for (const [name, value] of Object.entries(files))
    writeFileSync(path.join(dir, name), `${value}\n`);
  return dir;
}

const PULLS = `/pulls?state=open&head=applyinnovations:${encodeURIComponent('automation/oracle-26.3')}`;
const ISSUES = '/issues?state=open&per_page=100';
const ISSUE_TITLE = 'Oracle Hospitality API 26.3 needs manual migration';

test('report does nothing while upstream.json is current', async (t) => {
  const { request, calls } = fakeGitHub({});
  await report({ artifacts: candidate(t, 'current'), request, log: () => {} });
  assert.equal(calls.length, 0);
});

test('report opens one pull request for a passing candidate', async (t) => {
  const { request, calls } = fakeGitHub({
    [`GET ${PULLS}`]: ok([]),
    'POST /pulls': ok({ html_url: 'pr' }),
  });
  await report({ artifacts: candidate(t, 'passed'), request, log: () => {} });
  const pull = JSON.parse(calls[1].body);
  assert.equal(pull.head, 'automation/oracle-26.3');
  assert.equal(pull.base, 'main');
  assert.match(pull.body, /`v26.3` at `abc123`/);

  const again = fakeGitHub({ [`GET ${PULLS}`]: ok([{ html_url: 'pr' }]) });
  await report({
    artifacts: candidate(t, 'passed'),
    request: again.request,
    log: () => {},
  });
  assert.equal(again.calls.length, 1);
});

test('report opens one issue for a failing candidate, ignoring pull requests', async (t) => {
  const { request, calls } = fakeGitHub({
    [`GET ${ISSUES}`]: ok([{ title: ISSUE_TITLE, pull_request: {} }]),
    'POST /issues': ok({ html_url: 'issue' }),
  });
  await report({
    artifacts: candidate(t, 'failed'),
    request,
    runUrl: 'https://run',
    log: () => {},
  });
  const issue = JSON.parse(calls[1].body);
  assert.equal(issue.title, ISSUE_TITLE);
  assert.match(issue.body, /https:\/\/run/);

  const again = fakeGitHub({
    [`GET ${ISSUES}`]: ok([{ title: ISSUE_TITLE, html_url: 'issue' }]),
  });
  await report({
    artifacts: candidate(t, 'failed'),
    request: again.request,
    log: () => {},
  });
  assert.equal(again.calls.length, 1);
});

test('report rejects an unknown status', async (t) => {
  const { request } = fakeGitHub({});
  await assert.rejects(
    report({ artifacts: candidate(t, 'skipped'), request }),
    /unexpected status/,
  );
});

test("latestRelease returns the tag of Oracle's latest release", async () => {
  const fetch = async (url) => {
    assert.match(url, /oracle\/hospitality-api-docs\/releases\/latest$/);
    return Response.json({ tag_name: 'v26.3' });
  };
  assert.equal(await latestRelease(fetch), 'v26.3');
  await assert.rejects(
    latestRelease(async () => new Response('', { status: 403 })),
    /GitHub API 403/,
  );
  await assert.rejects(
    latestRelease(async () => Response.json({})),
    /no tag_name/,
  );
});
