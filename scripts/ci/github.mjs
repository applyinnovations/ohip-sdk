// A minimal GitHub REST client for the CI scripts that hold the App token.
// Self-contained (Node built-ins only) so the pipelines can run it from a
// sparse checkout of scripts/ci.

export const REPOSITORY = 'applyinnovations/ohip-sdk';

// Returns request(pathOrUrl, init) -> { status, body }. Paths are relative to
// the repository's API root. Throws on any status but 2xx and the ones listed
// in init.allow (returned with a null body), so a caller can treat a 404 as
// an answer.
export function github({
  token,
  repository = REPOSITORY,
  api = 'https://api.github.com',
  fetch = globalThis.fetch,
}) {
  const root = `${api}/repos/${repository}`;
  return async function request(
    pathOrUrl,
    { method = 'GET', allow = [], headers, body } = {},
  ) {
    const url = /^https?:/.test(pathOrUrl) ? pathOrUrl : `${root}${pathOrUrl}`;
    const response = await fetch(url, {
      method,
      body,
      headers: {
        authorization: `Bearer ${token}`,
        accept: 'application/vnd.github+json',
        'x-github-api-version': '2022-11-28',
        ...headers,
      },
    });
    if (!response.ok) {
      if (allow.includes(response.status))
        return { status: response.status, body: null };
      throw new Error(
        `${method} ${url}: ${response.status} ${await response.text()}`,
      );
    }
    const text = await response.text();
    return { status: response.status, body: text ? JSON.parse(text) : null };
  };
}
