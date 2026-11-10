// Usage: node scripts/ci/oracle-latest-release.mjs
// Prints the tag of oracle/hospitality-api-docs' latest GitHub release.
import { runMain } from './lib.mjs';

export async function latestRelease(fetch = globalThis.fetch) {
  const url =
    'https://api.github.com/repos/oracle/hospitality-api-docs/releases/latest';
  const response = await fetch(url, {
    headers: { accept: 'application/vnd.github+json' },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);
  const { tag_name: tag } = await response.json();
  if (typeof tag !== 'string' || !tag)
    throw new Error('latest Oracle release has no tag_name');
  return tag;
}

runMain(import.meta, async () => console.log(await latestRelease()));
