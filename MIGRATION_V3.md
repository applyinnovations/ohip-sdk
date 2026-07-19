# Migrating to 3.0

Version 3.0 updates the generated clients from Oracle Hospitality Property API
24.4 to 26.2. Stable npm package subpaths remain unchanged, but Oracle removed
and changed parts of the generated API surface. TypeScript consumers must
type-check and adapt affected request and model usage.

## TypeScript

Update the dependency normally:

```sh
npm install @applyinnovations/ohip-sdk@^3.0.0
```

Imports such as `@applyinnovations/ohip-sdk/crm` and
`@applyinnovations/ohip-sdk/rsv` do not need a path migration. Run TypeScript
validation, linting, and tests to identify schema-driven changes.

Oracle 26.2 removes these previously exported generated models:

- `blk/BlockAccessExclusionInfo`
- `crm/SuspendedProfileErrorSummaryInfo`
- `crm/SuspendedProfileErrorSummaryType`
- `rsv/ExcludedPreferenceType`
- `rsv/ReservationExcludedPreferences`
- `rsv/ReservationMembership`
- `rsv/UpgradeEligibilityReservations`

The release also adds the `cshasync` and `ecommtokenization` package subpaths.

## Go

Go requires the SDK major in every module and import path. Replace `/v2` with
`/v3` for each used API:

```diff
- github.com/applyinnovations/ohip-sdk/go/crm/v2
+ github.com/applyinnovations/ohip-sdk/go/crm/v3
```

Then update each module and validate the consumer:

```sh
go get github.com/applyinnovations/ohip-sdk/go/crm/v3@v3.0.0
go get github.com/applyinnovations/ohip-sdk/go/csh/v3@v3.0.0
go get github.com/applyinnovations/ohip-sdk/go/oauth/v3@v3.0.0
go get github.com/applyinnovations/ohip-sdk/go/rsv/v3@v3.0.0
go mod tidy
go test ./...
```

Projects that vendor dependencies should regenerate the vendor tree or its
reproducibility hash only after module-mode tests pass.
