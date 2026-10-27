#!/usr/bin/env bash
# Usage: scripts/ci/upstream-candidate.sh <out-dir>
# Without credentials, inside `nix develop`: compare upstream.json with Oracle's
# latest GitHub release and, if it differs, validate the SDK against it.
# Writes to <out-dir>, for the publish task:
#   status          current | passed | failed
#   release, ref, commit   the candidate Oracle release
#   update.bundle   (passed) automation/oracle-<release>: one commit on HEAD
# Validation failures are recorded, not returned, so the publish task can
# report them.
set -euo pipefail
out=$1
cd "$(dirname "$0")/../.."

ref=$(node -e '
  fetch("https://api.github.com/repos/oracle/hospitality-api-docs/releases/latest", {
    headers: { accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`GitHub API ${r.status}`))))
    .then((release) => console.log(release.tag_name))
    .catch((error) => { console.error(error.message); process.exit(1); });
')
[[ "$ref" =~ ^v?[0-9A-Za-z][0-9A-Za-z._-]*$ ]] || { echo "unexpected Oracle tag '$ref'" >&2; exit 2; }
release=${ref#v}
printf '%s\n' "$ref" > "$out/ref"
printf '%s\n' "$release" > "$out/release"

if [ "$(jq -r .ref upstream.json)" = "$ref" ]; then
  echo "upstream.json already pins Oracle $ref."
  echo current > "$out/status"
  exit 0
fi

scripts/ci/fetch-oracle-specs.sh "$ref"
commit=$(git -C hospitality-api-docs rev-parse HEAD)
printf '%s\n' "$commit" > "$out/commit"

export OHIP_UPDATE_MANIFEST=1
if npm ci --no-audit --no-fund \
  && node scripts/set-upstream-version.mjs "$release" "$ref" "$commit" \
  && npm run validate; then
  base=$(git rev-parse HEAD)
  branch="automation/oracle-$release"
  git switch --quiet --create "$branch"
  git add --all
  git -c user.name="xlab-now[bot]" \
    -c user.email="949094+xlab-now[bot]@users.noreply.github.com" \
    commit --quiet -m "feat(upstream): update Oracle specs to $release"
  git bundle create "$out/update.bundle" "^$base" "refs/heads/$branch"
  echo passed > "$out/status"
  echo "Oracle $ref ($commit) passed validation."
else
  [ -f build.log ] && tail -n 200 build.log >&2
  echo failed > "$out/status"
  echo "Oracle $ref ($commit) failed validation." >&2
fi
