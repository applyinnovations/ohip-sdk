#!/usr/bin/env bash
# Usage: scripts/ci/check-release-tag.sh <tag> <revision>
# A tag alone is not trusted: only a vMAJOR.MINOR.PATCH tag on a commit already
# on main publishes. The release pipeline runs main's copy before any of the
# tag's code. Needs refs/tags/<tag> and refs/remotes/origin/main in the current
# repository.
set -euo pipefail
tag=$1
revision=$2
[[ "$tag" =~ ^v(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$ ]] || {
  echo "release tag '$tag' is not vMAJOR.MINOR.PATCH" >&2; exit 2; }
[ "$(git rev-parse --verify --quiet "refs/tags/$tag^{commit}")" = "$revision" ] || {
  echo "tag $tag does not point at $revision" >&2; exit 2; }
git merge-base --is-ancestor "$revision" refs/remotes/origin/main || {
  echo "$revision is not on main" >&2; exit 2; }
echo "Release tag $tag verified on main at $revision"
