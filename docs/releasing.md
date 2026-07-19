# Release runbook

## Repository settings

Protect `main`, require the `CI / validate` check, require review for release
pull requests, and prevent tag deletion or updates for `v*` and `go/*` tags.
Create a GitHub environment named `npm`; approval rules are recommended for
production publishing.

Configure GitHub Actions as the npm trusted publisher: organization
`applyinnovations`, repository `ohip-sdk`, workflow `release.yml`, environment
`npm`, with only `npm publish` allowed. Configure npm publishing access to
require 2FA and disallow token publishing. Do not add a long-lived npm publish
token to the repository or environment.

Trusted publishing requires a GitHub-hosted runner, `id-token: write`, Node
22.14 or later, and npm 11.5.1 or later. The workflow pins npm 11.15.0 and
rebuilds from source; it does not publish developer-machine artifacts.

## Routine releases

Use Conventional Commit subjects so Release Please can calculate the next
version:

- `fix:` produces a patch candidate.
- `feat:` produces a minor candidate.
- `feat!:` or a `BREAKING CHANGE:` footer produces a major candidate.

Review and merge the Release Please PR. It creates the GitHub release and
explicitly dispatches `release.yml` for the new tag. A successful run leaves:

- npm package `@applyinnovations/ohip-sdk@X.Y.Z`;
- source tag `vX.Y.Z` and GitHub release tarball;
- generated branch `generated/vX.Y.Z`;
- one immutable `go/<api>/vX.Y.Z` tag per Go module.

If publishing is interrupted, rerun the same workflow. The job verifies
existing Git trees and npm versions rather than replacing them.

## Upstream updates

The weekly update workflow compares `upstream.json` with Oracle's latest
GitHub release. A passing candidate PR contains updated provenance and patched
file hashes. Inspect the generated API effect, update or remove obsolete local
patches, and mark breaking changes before merging.

To test a release manually:

```sh
git clone https://github.com/oracle/hospitality-api-docs.git hospitality-api-docs
git -C hospitality-api-docs checkout "$(node -p "require('./upstream.json').commit")"
npm ci
npm run validate
```

Never force a release tag or generated branch. Fix the source or automation and
publish a new SDK version.
