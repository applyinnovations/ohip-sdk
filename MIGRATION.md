# Migrating to 2.0

Version 2.0 replaces Git-based TypeScript installation and implementation-shaped
deep imports with registry packages and stable public paths. It also moves Go
modules out of `dist/` and gives them valid Semantic Version tags.

## TypeScript

Replace the Git dependency:

```json
"@applyinnovations/ohip-sdk": "^2.0.0"
```

Replace imports mechanically:

```diff
- from '@applyinnovations/ohip-sdk/dist/typescript-fetch/crm'
+ from '@applyinnovations/ohip-sdk/crm'

- from '@applyinnovations/ohip-sdk/dist/typescript-fetch/authenticationMiddleware'
+ from '@applyinnovations/ohip-sdk/authenticationMiddleware'
```

Then run `npm install`, TypeScript validation, linting, and tests. Do not retain
tarball overlays or scripts that restore `dist/`; the registry package already
contains its complete compiled output.

## Go

Replace module and import paths:

```diff
- github.com/applyinnovations/ohip-sdk/dist/go/crm
+ github.com/applyinnovations/ohip-sdk/go/crm/v2
```

Repeat for each used API, then run:

```sh
go get github.com/applyinnovations/ohip-sdk/go/crm/v2@v2.0.0
go get github.com/applyinnovations/ohip-sdk/go/csh/v2@v2.0.0
go get github.com/applyinnovations/ohip-sdk/go/oauth/v2@v2.0.0
go get github.com/applyinnovations/ohip-sdk/go/rsv/v2@v2.0.0
go mod tidy
go mod vendor
go test ./...
```
