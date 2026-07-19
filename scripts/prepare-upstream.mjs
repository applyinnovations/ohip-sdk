import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(path.join(root, 'upstream.json')));
const updatingManifest = process.env.OHIP_UPDATE_MANIFEST === '1';
const docsDir = path.resolve(
  process.env.OHIP_DOCS_DIR || process.argv[2] || path.join(root, 'hospitality-api-docs'),
);

if (!Array.isArray(manifest.patches) || manifest.patches.length === 0) {
  throw new Error('upstream.json must list at least one patch.');
}
if (!manifest.patchedFiles || Object.keys(manifest.patchedFiles).length === 0) {
  throw new Error('upstream.json must record at least one patched file hash.');
}

function git(args) {
  const result = spawnSync('git', ['-C', docsDir, ...args], {
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(result.stderr.trim() || `git ${args.join(' ')} failed`);
  }
  return result.stdout.trimEnd();
}

async function digest(relativePath) {
  const contents = await readFile(path.join(docsDir, relativePath));
  return createHash('sha256').update(contents).digest('hex');
}

async function isPrepared() {
  if (Object.keys(manifest.patchedFiles).length === 0) return false;
  for (const [relativePath, expected] of Object.entries(manifest.patchedFiles)) {
    try {
      if ((await digest(relativePath)) !== expected) return false;
    } catch {
      return false;
    }
  }
  return true;
}

const actualCommit = git(['rev-parse', 'HEAD']);
if (actualCommit !== manifest.commit) {
  throw new Error(
    `Oracle source mismatch: expected ${manifest.commit}, received ${actualCommit}. ` +
      'Check out the commit pinned in upstream.json.',
  );
}

if (updatingManifest || !(await isPrepared())) {
  for (const relativePatch of manifest.patches) {
    const patchFile = path.join(root, relativePatch);
    const reverseCheck = spawnSync('git', ['-C', docsDir, 'apply', '--reverse', '--check', patchFile]);
    if (reverseCheck.status === 0) continue;
    git(['apply', '--check', patchFile]);
    git(['apply', patchFile]);
  }
}

if (updatingManifest) {
  for (const relativePath of Object.keys(manifest.patchedFiles)) {
    manifest.patchedFiles[relativePath] = await digest(relativePath);
  }
  await writeFile(
    path.join(root, 'upstream.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
}

const allowedChanges = new Set(Object.keys(manifest.patchedFiles));
const sourceChanges = git([
  'status',
  '--porcelain=v1',
  '--untracked-files=all',
  '--',
  manifest.specDirectory,
]);
for (const line of sourceChanges.split('\n').filter(Boolean)) {
  const changedPath = line.slice(3).split(' -> ').at(-1);
  if (!allowedChanges.has(changedPath)) {
    throw new Error(
      `Unexpected Oracle source change ${changedPath}; only manifest patches are allowed.`,
    );
  }
}

if (!(await isPrepared())) {
  throw new Error('The patched Oracle specifications do not match upstream.json.');
}

console.log(
  `Prepared Oracle Hospitality API ${manifest.release} (${manifest.commit}).`,
);
