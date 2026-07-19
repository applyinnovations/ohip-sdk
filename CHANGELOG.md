# Changelog

## [2.0.1](https://github.com/applyinnovations/ohip-sdk/compare/v2.0.0...v2.0.1) (2026-07-19)


### Bug Fixes

* publish release tarball by local path ([0b00677](https://github.com/applyinnovations/ohip-sdk/commit/0b006777d7cb8e1cc7459be627fceefcd2a77381))
* verify existing Go tags on release retry ([#28](https://github.com/applyinnovations/ohip-sdk/issues/28)) ([ed8dfed](https://github.com/applyinnovations/ohip-sdk/commit/ed8dfed530e573a6a43ef6cb0eb35b57824a952c))

## 2.0.0

- Publish the TypeScript SDK as `@applyinnovations/ohip-sdk` through npm.
- Replace generated deep imports with stable package subpaths.
- Move Go modules from `dist/go/<api>` to `go/<api>` and adopt `/v2` module paths.
- Pin and verify the exact Oracle specification source and local patch.
- Add middleware, Go module, package-content, and clean-install tests.
- Add immutable release and upstream-detection automation.
