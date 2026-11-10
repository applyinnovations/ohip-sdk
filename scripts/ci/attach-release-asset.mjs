// Usage: TOKEN_FILE=<file> node scripts/ci/attach-release-asset.mjs <tag> <artifacts-dir>
// Holds the GitHub token, so the release pipeline runs it from its own checkout
// of main, never the build's workspace.
// Attaches the npm tarball to the tag's GitHub release, creating the release if
// it is missing; an asset that is already attached is left alone.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { github } from './github.mjs';
import { readToken, runMain, tarballName } from './lib.mjs';

export async function attach({ tag, artifacts, request, log = console.log }) {
  const name = tarballName(tag);
  const file = readFileSync(path.join(artifacts, name));
  const found = await request(`/releases/tags/${encodeURIComponent(tag)}`, {
    allow: [404],
  });
  const release =
    found.status === 404
      ? (
          await request('/releases', {
            method: 'POST',
            body: JSON.stringify({ tag_name: tag, name: tag }),
          })
        ).body
      : found.body;
  if (release.assets.some((asset) => asset.name === name)) {
    log(`${name} is already attached to ${tag}.`);
    return;
  }
  const upload = release.upload_url.replace(/\{.*\}$/, '');
  await request(`${upload}?name=${encodeURIComponent(name)}`, {
    method: 'POST',
    headers: { 'content-type': 'application/gzip' },
    body: file,
  });
  log(`Attached ${name} to ${release.html_url}`);
}

runMain(import.meta, async () => {
  const [tag, artifacts] = process.argv.slice(2);
  if (!tag || !artifacts)
    throw new Error('usage: attach-release-asset.mjs <tag> <artifacts-dir>');
  await attach({ tag, artifacts, request: github({ token: readToken() }) });
});
