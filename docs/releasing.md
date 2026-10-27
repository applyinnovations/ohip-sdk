# Release runbook

## Repository settings

CI runs on the xlab Tekton cluster through Pipelines-as-Code (`.tekton/`);
there are no GitHub Actions workflows. Runs always use `main`'s `.tekton/`, so
a pull request cannot change its own checks.

Protect `main`, require the `tekton-xlab / ohip-sdk-ci-` check, require review
for release pull requests, and prevent tag deletion or updates for `v*` and
`go/*` tags.

npm trusted publishing (OIDC) only supports GitHub-hosted runners, so the
release pipeline publishes with a granular access token limited to this
package, stored as the sops-encrypted `ohip-sdk-npm-token` Secret in
xlab-deployments. Packages are published without provenance.

## Routine releases

Use Conventional Commit subjects so Release Please can calculate the next
version:

- `fix:` produces a patch candidate.
- `feat:` produces a minor candidate.
- `feat!:` or a `BREAKING CHANGE:` footer produces a major candidate.

Every push to `main` runs the Release Please CLI (`.tekton/release-please.yaml`),
which keeps the release PR current. Review and merge it: the next run creates
the GitHub release and its `vX.Y.Z` tag, and the tag push starts
`.tekton/release.yaml`. The release pipeline publishes only a tag that matches
`package.json` and points at a commit on `main`. A successful run leaves:

- npm package `@applyinnovations/ohip-sdk@X.Y.Z`;
- source tag `vX.Y.Z` and GitHub release tarball;
- generated branch `generated/vX.Y.Z`;
- one immutable `go/<api>/vX.Y.Z` tag per Go module.

If publishing is interrupted, re-run the failed `tekton-xlab / ohip-sdk-release-`
check on the tag's commit. Each step verifies existing Git trees, npm versions
and release assets rather than replacing them.

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
