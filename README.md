# OHIP SDK

Generated TypeScript and Go clients for the Oracle Hospitality Integration
Platform (OHIP) Property APIs, with Apply Innovations authentication and
cashier-mapping middleware.

The SDK version follows Semantic Versioning. The Oracle source release is
tracked independently and immutably in [`upstream.json`](./upstream.json).
Version 2.0.0 is generated from Oracle Property API 24.4 at commit
`6a002086e8fe645688adcb414a874737bee622ac`.

## TypeScript

Install the package from npm:

```sh
npm install @applyinnovations/ohip-sdk
```

Import individual API surfaces through stable package subpaths:

```ts
import {
  Configuration,
  ProfileApi,
} from '@applyinnovations/ohip-sdk/crm';
import {
  GrantTypeEnum,
  OhipCredentialsProvider,
} from '@applyinnovations/ohip-sdk/authenticationMiddleware';

const credentials = new OhipCredentialsProvider({
  appKey: process.env.OHIP_APP_KEY!,
  clientId: process.env.OHIP_CLIENT_ID!,
  clientSecret: process.env.OHIP_CLIENT_SECRET!,
  enterpriseId: process.env.OHIP_ENTERPRISE_ID!,
  grantType: GrantTypeEnum.client_credentials,
  host: process.env.OHIP_DOMAIN!,
  scope: process.env.OHIP_SCOPE!,
});

const configuration = new Configuration({
  basePath: process.env.OHIP_DOMAIN,
  middleware: [{ pre: credentials.authenticationMiddleware.bind(credentials) }],
});
const profiles = new ProfileApi(configuration);
```

The npm package contains compiled TypeScript clients only. Generated source,
Go clients, generator state, and build tooling are not included.

## Go

Each Property API is an independently versioned Go module. Major version 2 is
part of the module and import paths, as required by Go modules:

```sh
go get github.com/applyinnovations/ohip-sdk/go/oauth/v2@v2.0.0
go get github.com/applyinnovations/ohip-sdk/go/crm/v2@v2.0.0
go get github.com/applyinnovations/ohip-sdk/go/rsv/v2@v2.0.0
```

```go
import (
	crm "github.com/applyinnovations/ohip-sdk/go/crm/v2"
)

configuration := crm.NewConfiguration()
configuration.Scheme = "https"
configuration.Host = os.Getenv("OHIP_DOMAIN")
client := crm.NewAPIClient(configuration)
```

Go module tags are prefixed with their repository directory, for example
`go/crm/v2.0.0`. Tags are immutable.

## Reproducible generation

Requirements:

- Node.js 22
- npm 11.5.1 or newer for publishing
- Java 21
- Go 1.25

Check out the pinned Oracle specifications:

```sh
git clone https://github.com/oracle/hospitality-api-docs.git hospitality-api-docs
git -C hospitality-api-docs checkout 6a002086e8fe645688adcb414a874737bee622ac
npm ci
npm run validate
```

`npm run validate` verifies and patches the pinned specifications, regenerates
both SDKs from a clean tree, compiles TypeScript, tests custom middleware,
tests every Go module, and installs the packed npm tarball into a clean fixture.

The local patch reproduces two historical fixes to Oracle 24.4 specifications.
Its resulting file hashes are recorded in `upstream.json`, so the build fails
if the input or patch changes unexpectedly.

## Versioning and releases

- Patch releases fix implementation or generator defects without changing the
  public API.
- Minor releases add backward-compatible endpoints, models, or helpers.
- Major releases include removed or renamed generated APIs, changed model
  types, import-path changes, or other breaking changes.
- The Oracle release number is provenance, not the SDK package version.

Release automation publishes the TypeScript package through npm trusted
publishing, creates an immutable GitHub release, and emits a correctly prefixed
tag for every generated Go module. See [MIGRATION.md](./MIGRATION.md) for the
2.0 migration, [the packaging design](./docs/packaging.md) for the decisions
behind it, and [the release runbook](./docs/releasing.md) for initial setup.

## License

Apply Innovations custom code is licensed under the ISC License. Generated API
definitions are derived from Oracle specifications distributed under the
Universal Permissive License 1.0. See [LICENSE](./LICENSE) and
[THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).
