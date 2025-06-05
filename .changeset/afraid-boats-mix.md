---
'@gn8/alien-signals-react': minor
'@gn8/alien-signals-solid': minor
'@gn8/alien-signals-vue': minor
---

# Add Support for alien-signals v2 🎉

<br />

## Package Dependency Updates

- Updated `alien-signals` dependency version from `>=1.0.0` to `>=2.0.0`

<br />

## Development Dependencies Update

- Updated various development tools to their latest versions

<br />

## Package Structure Improvements

- Added `files` field to all packages
  ```json
  "files": [
    "dist"
  ]
  ```
- This change brings the following improvements:
  - Optimizes package distribution size (includes only necessary files)
  - Prevents unnecessary files from being published to npm
  - Makes package contents clearer and improves maintainability

<br />

## Version Management

- Updated all packages to version `0.1.0`
- Managed changes as a minor version update
