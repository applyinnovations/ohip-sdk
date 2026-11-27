import { mkdtemp, open, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cliExecutable = path.join(
  root,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'openapi-generator-cli.cmd' : 'openapi-generator-cli',
);
const config = JSON.parse(await readFile(path.join(root, 'openapitools.json'), 'utf8'));
const cliConfig = config['generator-cli'];
const version = cliConfig.version;
const jarPath = path.join(
  root,
  'node_modules',
  '@openapitools',
  'openapi-generator-cli',
  'versions',
  `${version}.jar`,
);
const logPath = path.join(root, 'build.log');

function parseKeyValueMap(value) {
  if (!value) return undefined;
  if (typeof value === 'object') return value;
  const out = {};
  for (const pair of String(value).split(',')) {
    if (!pair) continue;
    const eq = pair.indexOf('=');
    if (eq === -1) out[pair.trim()] = '';
    else out[pair.slice(0, eq).trim()] = pair.slice(eq + 1).trim();
  }
  return out;
}

function resolvePlaceholders(value, name) {
  if (typeof value === 'string') return value.replaceAll('#{name}', name);
  if (Array.isArray(value)) return value.map((item) => resolvePlaceholders(item, name));
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = resolvePlaceholders(v, name);
    return out;
  }
  return value;
}

async function resolveGlob(globPattern) {
  const normalized = globPattern.replace(/^\.\//, '');
  const dir = path.join(root, path.dirname(normalized));
  const pattern = path.basename(normalized);
  const regex = new RegExp(
    `^${pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*')}$`,
  );
  const entries = (await readdir(dir)).filter((entry) => regex.test(entry)).sort();
  return entries.map((entry) => path.join(dir, entry));
}

async function ensureJar() {
  try {
    await readFile(jarPath);
    return;
  } catch {
    // Let openapi-generator-cli download and cache the configured version jar.
  }
  const code = await new Promise((resolve, reject) => {
    const child = spawn(cliExecutable, ['version'], {
      cwd: root,
      stdio: 'inherit',
    });
    child.on('error', reject);
    child.on('close', resolve);
  });
  if (code !== 0) {
    throw new Error(`Failed to ensure OpenAPI Generator ${version} jar`);
  }
}

await ensureJar();

const batchDir = await mkdtemp(path.join(os.tmpdir(), 'ohip-sdk-batch-'));
const configFiles = [];
const threads = Math.max(
  1,
  Math.min(
    Number.parseInt(process.env.OHIP_GENERATE_THREADS || '', 10) ||
      os.availableParallelism(),
    8,
  ),
);

try {
  for (const [key, gen] of Object.entries(cliConfig.generators)) {
    const specs = await resolveGlob(gen.glob);
    if (specs.length === 0) {
      throw new Error(`Generator ${key} matched no specifications for glob ${gen.glob}`);
    }
    for (const specPath of specs) {
      const name = path.basename(specPath, path.extname(specPath));
      const batchConfig = {
        generatorName: gen.generatorName,
        inputSpec: specPath,
        outputDir: path.resolve(root, resolvePlaceholders(gen.output, name)),
      };
      if (gen.templateDir) {
        batchConfig.templateDir = path.resolve(root, resolvePlaceholders(gen.templateDir, name));
      }
      if (gen.gitRepoId) batchConfig.gitRepoId = resolvePlaceholders(gen.gitRepoId, name);
      if (gen.gitUserId) batchConfig.gitUserId = resolvePlaceholders(gen.gitUserId, name);
      if (gen.skipOperationExample !== undefined) {
        batchConfig.skipOperationExample = gen.skipOperationExample;
      }
      if (gen.globalProperty) {
        batchConfig.globalProperties = parseKeyValueMap(
          resolvePlaceholders(gen.globalProperty, name),
        );
      }
      if (gen.typeMappings) {
        batchConfig.typeMappings = parseKeyValueMap(
          resolvePlaceholders(gen.typeMappings, name),
        );
      }
      if (gen.additionalProperties) {
        batchConfig.additionalProperties = resolvePlaceholders(gen.additionalProperties, name);
      }
      const cfgFile = path.join(batchDir, `${key}-${name}.json`);
      await writeFile(cfgFile, JSON.stringify(batchConfig, null, 2));
      configFiles.push(cfgFile);
    }
  }

  const javaOpts = (process.env.JAVA_OPTS || '-Xmx4g').split(/\s+/).filter(Boolean);
  const log = await open(logPath, 'w');
  let exitCode;
  try {
    exitCode = await new Promise((resolve, reject) => {
      const child = spawn(
        'java',
        [
          ...javaOpts,
          '-jar',
          jarPath,
          'batch',
          '--fail-fast',
          '--threads',
          String(threads),
          '--',
          ...configFiles,
        ],
        {
          cwd: root,
          stdio: ['ignore', log.fd, log.fd],
        },
      );
      child.on('error', reject);
      child.on('close', resolve);
    });
  } finally {
    await log.close();
  }

  const output = await readFile(logPath, 'utf8');
  if (exitCode !== 0) {
    const lines = output.trimEnd().split('\n');
    console.error(lines.slice(-100).join('\n'));
    throw new Error(`OpenAPI generation failed; see ${logPath}`);
  }

  const parserFailures = output
    .split('\n')
    .filter((line) => /Exception while parsing:|JsonParseException|JsonMappingException/.test(line));
  if (parserFailures.length > 0) {
    console.error(parserFailures.join('\n'));
    throw new Error(`OpenAPI Generator reported schema parser failures; see ${logPath}`);
  }
} finally {
  await rm(batchDir, { force: true, recursive: true });
}

await import('./copy-go-customizations.mjs');
console.log(`Generated TypeScript and Go clients. Full output: ${logPath}`);
