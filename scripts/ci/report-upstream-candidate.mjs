// Usage: TOKEN_FILE=<file> RUN_URL=<url> node scripts/ci/report-upstream-candidate.mjs <artifacts-dir>
// Holds the GitHub token, so the upstream watch runs it from its own checkout
// of main, never the candidate's workspace.
// Reports what upstream-candidate.sh found: passed makes sure a pull request
// is open for automation/oracle-<release>; failed makes sure an issue is open
// for the release; current does nothing.
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { REPOSITORY, github } from './github.mjs';
import { readToken, runMain } from './lib.mjs';

const OWNER = REPOSITORY.split('/')[0];

export async function report({
  artifacts,
  request,
  runUrl,
  log = console.log,
}) {
  const read = (name) =>
    readFileSync(path.join(artifacts, name), 'utf8').trim();
  const status = read('status');
  if (status === 'current') {
    log(`upstream.json already pins Oracle ${read('ref')}.`);
    return;
  }
  if (status !== 'passed' && status !== 'failed')
    throw new Error(`unexpected status '${status}'`);
  const [release, ref, commit] = [read('release'), read('ref'), read('commit')];

  if (status === 'passed') {
    const branch = `automation/oracle-${release}`;
    const open = await request(
      `/pulls?state=open&head=${OWNER}:${encodeURIComponent(branch)}`,
    );
    if (open.body.length > 0) {
      log(`Pull request already open: ${open.body[0].html_url}`);
      return;
    }
    const pull = await request('/pulls', {
      method: 'POST',
      body: JSON.stringify({
        title: `feat(upstream): update Oracle specs to ${release}`,
        head: branch,
        base: 'main',
        body: [
          `Updates the pinned Oracle Hospitality API source to \`${ref}\` at \`${commit}\`.`,
          '',
          'The full SDK generation, TypeScript tests, all Go module tests, and npm package smoke tests passed. Review generated API compatibility and apply the appropriate release label before merging.',
        ].join('\n'),
      }),
    });
    log(`Opened ${pull.body.html_url}`);
    return;
  }

  const title = `Oracle Hospitality API ${release} needs manual migration`;
  const issues = await request('/issues?state=open&per_page=100');
  const existing = issues.body.find(
    (issue) => !issue.pull_request && issue.title === title,
  );
  if (existing) {
    log(`Issue already open: ${existing.html_url}`);
    return;
  }
  const issue = await request('/issues', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body: [
        `The scheduled update check found ${ref} at \`${commit}\`,`,
        'but the existing patches or generated SDK validation failed.',
        '',
        `See pipeline run: ${runUrl}`,
      ].join('\n'),
    }),
  });
  log(`Opened ${issue.body.html_url}`);
}

runMain(import.meta, async () => {
  const [artifacts] = process.argv.slice(2);
  if (!artifacts)
    throw new Error('usage: report-upstream-candidate.mjs <artifacts-dir>');
  await report({
    artifacts,
    request: github({ token: readToken() }),
    runUrl: process.env.RUN_URL,
  });
});
