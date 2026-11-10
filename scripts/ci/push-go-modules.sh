#!/usr/bin/env bash
# Usage: GIT_CREDENTIALS=<file> scripts/ci/push-go-modules.sh <tag> <artifacts-dir> [origin]
# Holds the GitHub credential, so the release pipeline runs it from its own
# checkout of main, never the build's workspace.
# Pushes generated/<tag> and every go/<module>/<tag> from the build's
# go-modules.bundle atomically, or accepts them if they already exist with the
# same content. Works in a fresh repository: no hooks or config from the build.
set -euo pipefail
tag=$1
artifacts=$2
origin=${3:-https://github.com/applyinnovations/ohip-sdk.git}
: "${GIT_CREDENTIALS:?GIT_CREDENTIALS must name a git-credentials file}"

[[ "$tag" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]] || { echo "release tag '$tag' is not vX.Y.Z" >&2; exit 2; }
version=${tag#v}
branch="generated/$tag"
tag_refs=()
while read -r module_tag; do
  [[ "$module_tag" =~ ^go/[a-z0-9_-]+/v${version//./\\.}$ ]] || {
    echo "unexpected module tag '$module_tag'" >&2; exit 2; }
  tag_refs+=("refs/tags/$module_tag")
done < "$artifacts/go-tags"
[ "${#tag_refs[@]}" -gt 0 ] || { echo "no Go module tags in $artifacts/go-tags" >&2; exit 2; }

repo=$(mktemp -d)
trap 'rm -rf "$repo"' EXIT
git init --quiet --bare "$repo"
cd "$repo"
# The bundle's prerequisite: the release commit.
git fetch --quiet --depth 1 "$origin" "+refs/tags/$tag:refs/tags/$tag"
refspecs=("+refs/heads/$branch:refs/heads/$branch")
for ref in "${tag_refs[@]}"; do refspecs+=("+$ref:$ref"); done
git fetch --quiet "$artifacts/go-modules.bundle" "${refspecs[@]}"
head=$(git rev-parse "refs/heads/$branch")
[ "$(git rev-parse "$head^")" = "$(git rev-parse "$tag^{commit}")" ] || {
  echo "$branch is not a single commit on $tag" >&2; exit 2; }
for ref in "${tag_refs[@]}"; do
  [ "$(git rev-list -n 1 "$ref")" = "$head" ] || { echo "$ref does not point at $branch" >&2; exit 2; }
done

if git ls-remote --exit-code --heads "$origin" "$branch" >/dev/null; then
  git fetch --quiet "$origin" "+refs/heads/$branch:refs/remote-branch"
  if [ "$(git rev-parse "$head^{tree}")" != "$(git rev-parse "refs/remote-branch^{tree}")" ]; then
    echo "Existing $branch is not reproducible from this release." >&2
    exit 1
  fi
  expected=$(git rev-parse refs/remote-branch)
  for ref in "${tag_refs[@]}"; do
    check_ref="refs/ohip-release-check/${ref#refs/tags/}"
    git fetch --quiet "$origin" "+$ref:$check_ref"
    if [ "$(git rev-list -n 1 "$check_ref")" != "$expected" ]; then
      echo "Existing tag $ref does not point to $branch." >&2
      exit 1
    fi
  done
  echo "The generated Go release already exists and matches this build."
else
  for ref in "${tag_refs[@]}"; do
    if git ls-remote --exit-code --tags "$origin" "$ref" >/dev/null; then
      echo "Tag $ref exists without $branch; refusing a partial release." >&2
      exit 1
    fi
  done
  git -c credential.helper="store --file=$GIT_CREDENTIALS" \
    push --quiet --atomic "$origin" "refs/heads/$branch:refs/heads/$branch" "${tag_refs[@]}"
  echo "Pushed $branch and ${#tag_refs[@]} Go module tags."
fi
