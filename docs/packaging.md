# Packaging and versioning design

## Problems in the previous release model

The previous repository mixed source, generated artifacts, and distribution
state in one mutable Git workflow:

- `package.json` remained at `1.0.0` while workflow variables and custom Git
  tags claimed different SDK versions. npm therefore had no new package version
  to resolve.
- TypeScript consumers installed a Git branch or tag. npm records that as a
  commit, not as a registry SemVer range, so normal `npm update` behavior did
  not apply.
- Generated `dist/` files were not reliably included by `npm pack`. Calile had
  to download another Git archive and restore `dist/` during Nix builds.
- Release branches and tags were force-pushed. A previously resolved dependency
  could consequently change content, defeating lockfiles and reproducibility.
- Go modules lived below `dist/go`, used pseudo-versions, and had no directory-
  prefixed module tags. Go could not discover normal releases for the modules.
- An Apply Innovations fork hid the Oracle source delta and its provenance.
  Updating upstream meant reconciling an old branch by hand.
- CI generated artifacts but did not exercise a clean npm consumer install or
  compile every independently generated Go module.

These are packaging and release-identity problems, not npm cache problems.
Deleting and reinstalling happened to select a new Git commit, but could not
make an unversioned Git dependency behave like a registry package.

## Target model

There are three separate identities:

1. The SDK has a Semantic Version, shared by npm and all Go modules.
2. The Oracle API release is source provenance recorded in `upstream.json`.
3. The OpenAPI Generator engine and wrapper are independently pinned in the
   lockfile and generator configuration.

The npm package exposes only compiled TypeScript through stable subpath exports,
for example `@applyinnovations/ohip-sdk/crm`. Its tarball excludes generated
source, Go, documentation emitted by the generator, caches, and build tooling.

Every Go API is a module at
`github.com/applyinnovations/ohip-sdk/go/<api>/vN`, where `N` is the SDK major.
A release creates an
immutable `go/<api>/vX.Y.Z` tag for each module. Generated Go sources live on a
`generated/vX.Y.Z` branch so ordinary source clones and source tags stay small.

Oracle specifications are checked out at the exact commit in `upstream.json`.
Small, reviewable patches replace the long-lived fork, and hashes verify their
result. A source or patch mismatch stops the build.

## Automation flow

- Pull requests and `main` run clean generation, TypeScript compilation and
  middleware tests, all Go module tests, npm tarball inspection, and a clean
  consumer installation/type-check.
- Release Please maintains future SDK versions and the changelog from
  Conventional Commits.
- Publishing is triggered only by a GitHub release whose `vX.Y.Z` tag exactly
  matches `package.json`.
- The publish job regenerates everything from pinned inputs, validates it,
  atomically pushes the generated Go branch and all module tags, then publishes
  the npm tarball using OIDC trusted publishing and provenance.
- A retry never overwrites release state. Existing Go refs are accepted only
  when their Git tree exactly matches a fresh build; an existing npm version is
  skipped.
- A weekly job checks Oracle's latest release. It opens a PR only when existing
  patches and the full validation suite pass. Otherwise it opens or updates an
  issue with the failed run, making upstream drift visible without merging an
  unsafe generated update.

## Version policy

- Patch: implementation, packaging, documentation, or generator fixes that do
  not change a public API.
- Minor: backward-compatible APIs, models, or helpers.
- Major: removed or renamed APIs, changed model contracts, new required fields,
  or import/module path changes.

Oracle release numbers do not determine the SDK version. Review an automated
upstream PR for generated API compatibility and select the SDK increment based
on its public effect.

## Downstream flow

Dependabot or Renovate can now propose ordinary npm and Go module upgrades.
The downstream CI gate should run TypeScript lint/type-check/tests, `go mod
tidy`, `go mod vendor`, and Go tests. No archive overlays or dependency removal
scripts should remain. See `MIGRATION.md` and `MIGRATION_V3.md` for
major-version migrations.
