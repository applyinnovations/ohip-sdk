// Helpers shared by the CI scripts. Node built-ins only, so the pipelines can
// run them from a sparse checkout of scripts/ci.
import { readFileSync, realpathSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// The npm tarball `npm pack` writes for a release tag.
export function tarballName(tag) {
  if (!/^v\d+\.\d+\.\d+$/.test(tag))
    throw new Error(`release tag '${tag}' is not vX.Y.Z`);
  return `applyinnovations-ohip-sdk-${tag.slice(1)}.tgz`;
}

export function readToken(file = process.env.TOKEN_FILE) {
  if (!file) throw new Error('TOKEN_FILE must name the GitHub token file');
  return readFileSync(file, 'utf8').trim();
}

// Runs main() when the module is the entry point, exiting 1 with the message
// on failure.
export function runMain(meta, main) {
  if (
    process.argv[1] &&
    fileURLToPath(meta.url) === realpathSync(process.argv[1])
  ) {
    main().catch((error) => {
      console.error(error.message);
      process.exit(1);
    });
  }
}
