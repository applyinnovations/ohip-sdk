# Changelog

## [3.0.0](https://github.com/applyinnovations/ohip-sdk/compare/v2.0.1...v3.0.0) (2026-07-19)


### ⚠ BREAKING CHANGES

* **upstream:** update Oracle specs to 26.2 ([#34](https://github.com/applyinnovations/ohip-sdk/issues/34))

### Features

* **upstream:** update Oracle specs to 26.2 ([#34](https://github.com/applyinnovations/ohip-sdk/issues/34)) ([99720d9](https://github.com/applyinnovations/ohip-sdk/commit/99720d94ed4e9a671b1c6330d95c6fd40e84fcae))

## [2.0.1](https://github.com/applyinnovations/ohip-sdk/compare/v2.0.0...v2.0.1) (2026-07-19)


### Bug Fixes

* publish npm package with trusted OIDC ([#29](https://github.com/applyinnovations/ohip-sdk/issues/29)) ([f15826f](https://github.com/applyinnovations/ohip-sdk/commit/f15826f09ae7528f8db8c72ccd8e1d40f1310e3e))
* publish release tarball by local path ([0b00677](https://github.com/applyinnovations/ohip-sdk/commit/0b006777d7cb8e1cc7459be627fceefcd2a77381))
* verify existing Go tags on release retry ([#28](https://github.com/applyinnovations/ohip-sdk/issues/28)) ([ed8dfed](https://github.com/applyinnovations/ohip-sdk/commit/ed8dfed530e573a6a43ef6cb0eb35b57824a952c))

## 2.0.0

- Publish the TypeScript SDK as `@applyinnovations/ohip-sdk` through npm.
- Replace generated deep imports with stable package subpaths.
- Move Go modules from `dist/go/<api>` to `go/<api>` and adopt `/v2` module paths.
- Pin and verify the exact Oracle specification source and local patch.
- Add middleware, Go module, package-content, and clean-install tests.
- Add immutable release and upstream-detection automation.
