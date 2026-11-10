#!/usr/bin/env bash
# Usage: GIT_CREDENTIALS=<file> scripts/ci/push-upstream-candidate.sh <artifacts-dir> <revision> [origin]
# Holds the GitHub credential, so the upstream watch runs it from its own
# checkout of main, never the candidate's workspace.
# If upstream-candidate.sh passed, pushes automation/oracle-<release> from its
# update.bundle in a fresh repository, so nothing the build wrote runs with the
# credential. An unchanged candidate is not re-pushed.
set -euo pipefail
artifacts=$1
revision=$2
origin=${3:-https://github.com/applyinnovations/ohip-sdk.git}
: "${GIT_CREDENTIALS:?GIT_CREDENTIALS must name a git-credentials file}"

[ "$(cat "$artifacts/status")" = passed ] || { echo "No passing candidate to push."; exit 0; }
release=$(cat "$artifacts/release")
[[ "$release" =~ ^[0-9A-Za-z][0-9A-Za-z._-]*$ ]] || { echo "unexpected release '$release'" >&2; exit 2; }
branch="automation/oracle-$release"

repo=$(mktemp -d)
trap 'rm -rf "$repo"' EXIT
git init --quiet --bare "$repo"
cd "$repo"
# The bundle's prerequisite: the main commit the check ran on.
git fetch --quiet --depth 1 "$origin" "$revision"
git fetch --quiet "$artifacts/update.bundle" "+refs/heads/$branch:refs/heads/$branch"
if git ls-remote --exit-code --heads "$origin" "$branch" >/dev/null; then
  git fetch --quiet --depth 1 "$origin" "+refs/heads/$branch:refs/remote-branch"
  if [ "$(git rev-parse "refs/heads/$branch^{tree}")" = "$(git rev-parse "refs/remote-branch^{tree}")" ]; then
    echo "$branch already holds this update."
    exit 0
  fi
fi
git -c credential.helper="store --file=$GIT_CREDENTIALS" \
  push --quiet --force "$origin" "refs/heads/$branch:refs/heads/$branch"
echo "Pushed $branch."
