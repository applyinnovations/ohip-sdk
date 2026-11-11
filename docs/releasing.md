# Release runbook

## Repository settings

CI runs on the xlab Tekton cluster through Pipelines-as-Code (`.tekton/`).
Runs always use `main`'s `.tekton/`, so a pull request cannot change its own
checks.

The one exception is the npm publish: npm trusted publishing (OIDC) only
supports GitHub-hosted runners, so `.github/workflows/npm-publish.yml`
publishes the npm package and nothing else. It needs no npm token and no
repository secret, and publishes with provenance. Its build job runs the tag's
`scripts/ci/release-build.sh` with no credentials; its publish job never runs
the tag's code, waits for approval in the `release` environment and runs
`scripts/ci/publish-npm.mjs`, which checks the tarball's name and version
against the tag and skips a version already on npm.

Protect `main`, require the `tekton-xlab / sdk-test-` check, require review
for release pull requests, and prevent tag deletion or updates for `v*` and
`go/*` tags.

One-time setup for the npm publish:

1. The `release` GitHub environment has the owner as required reviewer and
   allows deployments from `v*.*.*` tags and from `main` (manual runs).
2. On npmjs.com, under the package's Settings, add a trusted publisher:
   GitHub Actions, organization `applyinnovations`, repository `ohip-sdk`,
   workflow `npm-publish.yml`, environment `release`, allowed to run
   `npm publish` (not only `npm stage publish`). An unused configuration
   expires if it has no successful publish within two days.
3. After the first successful publish, set Publishing access to "Require
   two-factor authentication and disallow tokens". Trusted publishing keeps
   working; every token stops publishing.

## Routine releases

Use Conventional Commit subjects so Release Please can calculate the next
version:

- `fix:` produces a patch candidate.
- `feat:` produces a minor candidate.
- `feat!:` or a `BREAKING CHANGE:` footer produces a major candidate.

Every push to `main` runs the Release Please CLI (`.tekton/release-please.yaml`),
which keeps the release PR current. Review and merge it: the next run creates
the GitHub release and its `vX.Y.Z` tag, and the tag push starts
`.tekton/release.yaml` and `.github/workflows/npm-publish.yml`. Both publish
only a tag that matches `package.json` and points at a commit on `main`.
Approve the `npm-publish` run's `release` deployment on GitHub once the build
job passes. A successful release leaves:

- npm package `@applyinnovations/ohip-sdk@X.Y.Z`;
- source tag `vX.Y.Z` and GitHub release tarball;
- generated branch `generated/vX.Y.Z`;
- one immutable `go/<api>/vX.Y.Z` tag per Go module.

The pipelines only wire Tasks and call `scripts/ci/`; `npm run test:ci` tests
those scripts. A step that holds a credential runs `scripts/ci/` from its own
checkout (main's for a release, the pushed commit for Release Please and the
upstream watch), never from the workspace a build wrote to.

If publishing is interrupted, re-run the failed `tekton-xlab / release-`
check on the tag's commit, or re-run the failed `npm-publish` jobs. Each step
verifies existing Git trees, npm versions and release assets rather than
replacing them. To publish a tag pushed before `npm-publish.yml` existed, run
it by hand from `main`:

```sh
gh workflow run npm-publish.yml --repo applyinnovations/ohip-sdk --ref main -f tag=vX.Y.Z
```

## Upstream updates

A daily pipeline (`.tekton/upstream-watch.yaml`, started by the xlab nightly
cron) compares `upstream.json` with Oracle's latest GitHub release. A passing
candidate PR contains updated provenance and patched file hashes; a failing
candidate opens an issue instead. Inspect the generated API effect, update or
remove obsolete local patches, and mark breaking changes before merging.

To test a release manually:

```sh
git clone https://github.com/oracle/hospitality-api-docs.git hospitality-api-docs
git -C hospitality-api-docs checkout "$(node -p "require('./upstream.json').commit")"
npm ci
npm run validate
```

Never force a release tag or generated branch. Fix the source or automation and
publish a new SDK version.
