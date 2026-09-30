import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'src', 'go', 'oauth', 'authentication_middleware.go');
const destinationDir = path.join(root, 'go', 'oauth');
const generatorConfig = JSON.parse(
  await readFile(path.join(root, 'openapitools.json'), 'utf8'),
);
const moduleMajorVersion = generatorConfig['generator-cli'].generators.go
  .additionalProperties.moduleMajorVersion;

await mkdir(destinationDir, { recursive: true });
await cp(source, path.join(destinationDir, 'authentication_middleware.go'));

for (const entry of await readdir(path.join(root, 'go'), { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const moduleDir = path.join(root, 'go', entry.name);
  await Promise.all([
    rm(path.join(moduleDir, '.openapi-generator'), { force: true, recursive: true }),
    rm(path.join(moduleDir, '.openapi-generator-ignore'), { force: true }),
    rm(path.join(moduleDir, '.travis.yml'), { force: true }),
    rm(path.join(moduleDir, '.gitignore'), { force: true }),
    rm(path.join(moduleDir, 'api'), { force: true, recursive: true }),
    rm(path.join(moduleDir, 'docs'), { force: true, recursive: true }),
    rm(path.join(moduleDir, 'git_push.sh'), { force: true }),
    rm(path.join(moduleDir, 'test'), { force: true, recursive: true }),
  ]);

  const readmePath = path.join(moduleDir, 'README.md');
  const readme = await readFile(readmePath, 'utf8');
  const oldImport = `github.com/applyinnovations/ohip-sdk/${entry.name}`;
  const newImport = `github.com/applyinnovations/ohip-sdk/go/${entry.name}/${moduleMajorVersion}`;
  await writeFile(readmePath, readme.replaceAll(oldImport, newImport));

  const exceptionDetailPath = path.join(moduleDir, 'model_exception_detail_type.go');
  let exceptionDetail;
  try {
    exceptionDetail = await readFile(exceptionDetailPath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') continue;
    throw error;
  }

  const jsonImport = '\t"encoding/json"\n';
  const marshalFunction = 'func (o ExceptionDetailType) MarshalJSON() ([]byte, error) {';
  if (!exceptionDetail.includes(jsonImport) || !exceptionDetail.includes(marshalFunction)) {
    throw new Error(`Unexpected ExceptionDetailType output in go/${entry.name}.`);
  }

  const normalizeStatus = `func normalizeExceptionDetailStatus(data []byte) ([]byte, error) {
\tvar fields map[string]json.RawMessage
\tif err := json.Unmarshal(data, &fields); err != nil {
\t\treturn nil, err
\t}

\tencodedStatus, ok := fields["status"]
\tif !ok || string(encodedStatus) == "null" {
\t\treturn data, nil
\t}

\tvar status int32
\tif err := json.Unmarshal(encodedStatus, &status); err == nil {
\t\treturn data, nil
\t}

\tvar stringStatus string
\tif err := json.Unmarshal(encodedStatus, &stringStatus); err != nil {
\t\treturn nil, err
\t}
\tparsedStatus, err := strconv.ParseInt(stringStatus, 10, 32)
\tif err != nil {
\t\treturn nil, err
\t}
\tfields["status"] = json.RawMessage(strconv.FormatInt(parsedStatus, 10))
\treturn json.Marshal(fields)
}`;
  const generatedUnmarshal =
    'func (o *ExceptionDetailType) UnmarshalJSON(bytes []byte) (err error) {';

  exceptionDetail = exceptionDetail.replace(
    jsonImport,
    `${jsonImport}\t"strconv"\n`,
  );
  if (exceptionDetail.includes(generatedUnmarshal)) {
    exceptionDetail = exceptionDetail.replace(
      generatedUnmarshal,
      `${normalizeStatus}

${generatedUnmarshal}
\tbytes, err = normalizeExceptionDetailStatus(bytes)
\tif err != nil {
\t\treturn err
\t}`,
    );
  } else {
    exceptionDetail = exceptionDetail.replace(
      marshalFunction,
      `${normalizeStatus}

func (o *ExceptionDetailType) UnmarshalJSON(data []byte) error {
\tnormalized, err := normalizeExceptionDetailStatus(data)
\tif err != nil {
\t\treturn err
\t}
\ttype exceptionDetailTypeAlias ExceptionDetailType
\treturn json.Unmarshal(normalized, (*exceptionDetailTypeAlias)(o))
}

${marshalFunction}`,
    );
  }
  await writeFile(exceptionDetailPath, exceptionDetail);
}

console.log('Applied custom Go OAuth middleware and Oracle error decoding.');
