#!/usr/bin/env bash
# Usage: TOKEN_FILE=<file> scripts/ci/release-please/release-please.sh
# Holds the GitHub App token, so .tekton/release-please.yaml runs it from a
# sparse checkout of this directory at the pushed main commit. Creates the
# GitHub release and tag for a merged release PR, then opens or updates the
# next release PR, with the CLI pinned by package-lock.json.
set -euo pipefail
: "${TOKEN_FILE:?TOKEN_FILE must name the GitHub token file}"
cd "$(dirname "$0")"
npm ci --ignore-scripts --no-audit --no-fund --cache "${TMPDIR:-/tmp}/npm-cache"
token=$(cat "$TOKEN_FILE")
for command in github-release release-pr; do
  ./node_modules/.bin/release-please "$command" \
    --token="$token" \
    --repo-url=applyinnovations/ohip-sdk \
    --target-branch=main \
    --config-file=release-please-config.json \
    --manifest-file=.release-please-manifest.json
done
