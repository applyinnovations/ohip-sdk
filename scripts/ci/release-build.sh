#!/usr/bin/env bash
# Usage: scripts/ci/release-build.sh <vX.Y.Z> <artifacts-dir>
# Builds a release without credentials, inside `nix develop`: regenerates and
# validates everything, packs the npm tarball, and commits the generated Go
# modules on generated/<tag> with one annotated go/<module>/<tag> tag each.
# Writes to <artifacts-dir>, for the publish tasks:
#   *.tgz               the npm package
#   go-tags             the Go module tag names, one per line
#   go-modules.bundle   generated/<tag> and those tags, based on <tag>
set -euo pipefail
tag=$1
out=$2
cd "$(dirname "$0")/../.."

RELEASE_TAG="$tag" node scripts/assert-release-version.mjs
scripts/ci/validate.sh
npm pack --ignore-scripts --pack-destination "$out"

version=${tag#v}
branch="generated/$tag"
export GIT_AUTHOR_NAME="xlab-now[bot]" GIT_COMMITTER_NAME="xlab-now[bot]"
export GIT_AUTHOR_EMAIL="949094+xlab-now[bot]@users.noreply.github.com"
export GIT_COMMITTER_EMAIL="$GIT_AUTHOR_EMAIL"
git switch --quiet --create "$branch"
git add --force go
git commit --quiet -m "chore(release): generated Go modules for $tag"

: > "$out/go-tags"
while IFS=$'\t' read -r module _module_path; do
  module_tag="go/$module/v$version"
  git tag --force --annotate "$module_tag" --message "$module_tag"
  printf '%s\n' "$module_tag" >> "$out/go-tags"
done < <(node scripts/list-go-modules.mjs)

mapfile -t refs < <(sed 's|^|refs/tags/|' "$out/go-tags")
git bundle create "$out/go-modules.bundle" "^$tag" "refs/heads/$branch" "${refs[@]}"
echo "Built $tag: $(wc -l < "$out/go-tags") Go module tags and $(basename "$out"/*.tgz)"
