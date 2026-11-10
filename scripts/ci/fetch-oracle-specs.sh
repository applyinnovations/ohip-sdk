#!/usr/bin/env bash
# Usage: scripts/ci/fetch-oracle-specs.sh [commit-or-tag]
# Shallow-fetches oracle/hospitality-api-docs into ./hospitality-api-docs at the
# given ref, by default the commit pinned in upstream.json.
set -euo pipefail
cd "$(dirname "$0")/../.."
ref=${1:-$(jq -r .commit upstream.json)}
dir=hospitality-api-docs
rm -rf "$dir"
git init --quiet "$dir"
git -C "$dir" fetch --quiet --depth 1 "$(jq -r .repository upstream.json)" "$ref"
git -C "$dir" checkout --quiet --detach FETCH_HEAD
echo "Oracle specifications at $ref ($(git -C "$dir" rev-parse HEAD))"
