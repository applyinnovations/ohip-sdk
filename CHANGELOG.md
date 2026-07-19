# Changelog

## 2.0.0

- Publish the TypeScript SDK as `@applyinnovations/ohip-sdk` through npm.
- Replace generated deep imports with stable package subpaths.
- Move Go modules from `dist/go/<api>` to `go/<api>` and adopt `/v2` module paths.
- Pin and verify the exact Oracle specification source and local patch.
- Add middleware, Go module, package-content, and clean-install tests.
- Add immutable release and upstream-detection automation.
