#!/usr/bin/env bash
# The CI check: fetch the pinned Oracle specifications, then regenerate, test
# and pack both SDKs from a clean tree. Run it inside `nix develop`.
set -euo pipefail
cd "$(dirname "$0")/../.."
scripts/ci/fetch-oracle-specs.sh
npm ci --no-audit --no-fund
status=0
npm run validate || status=$?
if [ "$status" -ne 0 ] && [ -f build.log ]; then
  echo "--- last 200 lines of build.log ---" >&2
  tail -n 200 build.log >&2
fi
exit "$status"
