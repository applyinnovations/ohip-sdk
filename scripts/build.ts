import path from 'path';
import fs from 'fs';

import { generateApi } from 'swagger-typescript-api';
import fg from 'fast-glob';
import * as Eta from 'eta';

const DIRECTORY = `${
  process.env.HOSPITALITY_API_DOCS_DIR ?? 'hospitality-api-docs'
}/rest-api-specs/property`;
const GENERATED_OUTPUT_DIRECTORY = 'src/api';
const TEMPLATES_DIRECTORY = 'templates';

async function main() {
  const openApiSpecs = fg.sync(`${DIRECTORY}/*.{json,yaml,yml}`);

  // Generate
  const promises = openApiSpecs.map(async (openApiPath) => {
    return generateApi({
      name: path.basename(openApiPath),
      input: path.resolve(process.cwd(), openApiPath),
      output: path.resolve(process.cwd(), GENERATED_OUTPUT_DIRECTORY),
      templates: path.resolve(
        process.cwd(),
        `${TEMPLATES_DIRECTORY}/swagger-typescript-api`,
      ),
      enumNamesAsValues: true,
      generateUnionEnums: false,
      httpClientType: 'axios',
      codeGenConstructs: () => ({
        /**
         * includeInActive in oxi.json /lovCode/{lovCode}/listOfValuesOXI is defined with type = boolean but with an
         * enum value of "True" and "False"
         * The PR link below does not include double quotes if type is number or boolean, hence the type produced is True | False
         * which triggers a Typescript error.
         * https://github.com/acacode/swagger-typescript-api/pull/210/commits/92263514c8c73ce6236cb497656383d52a259545
         * This fix should work since non-integer/boolean values will always be wrapped in double-quote.
         * If a non-boolean enum "True" or "False" is used, it won't be affected since content will be either "\"True\"" or "\"False\""
         */
        UnionType: (contents) => {
          const newContents = contents.map((content) =>
            content === 'True' || content === 'False'
              ? content.toLowerCase()
              : content,
          );
          return Array.from(new Set(newContents)).join(' | ');
        },
      }),
    });
  });

  const generatedOutputs = await Promise.all(promises);

  const indexContent = (await Eta.renderFileAsync(
    path.resolve(process.cwd(), `${TEMPLATES_DIRECTORY}/ohip-client.ejs`),
    {
      services: generatedOutputs.map(({ files, configuration }) => {
        const fileBasename = path.basename(files[0].name, '.ts');
        return { fileBasename };
      }),
    },
  )) as string;

  fs.writeFileSync(
    path.join(GENERATED_OUTPUT_DIRECTORY, 'index.ts'),
    indexContent,
    { encoding: 'utf-8' },
  );
}

main();
