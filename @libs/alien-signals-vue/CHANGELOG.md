# @gn8/alien-signals-vue

## 0.1.1

### Patch Changes

- [#13](https://github.com/gn8-ai/universe-alien-signals/pull/13) [`2b0a5dd`](https://github.com/gn8-ai/universe-alien-signals/commit/2b0a5ddf0e0b11d09259923ceeb7bacd2ce71c41) Thanks [@junpei-8](https://github.com/junpei-8)! - Update dev dependencies.

## 0.1.0

### Minor Changes

- [#10](https://github.com/gn8-ai/universe-alien-signals/pull/10) [`6c1ffe9`](https://github.com/gn8-ai/universe-alien-signals/commit/6c1ffe941bf0e9f905da0b99f6bbca11fc19e7d1) Thanks [@junpei-8](https://github.com/junpei-8)! - # Add Support for alien-signals v2 🎉

  This update brings compatibility with alien-signals v2, introducing enhanced performance and improved type safety. The changes maintain backward compatibility while leveraging the new features and optimizations available in the latest version.

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

### Patch Changes

- [#9](https://github.com/gn8-ai/universe-alien-signals/pull/9) [`2f23230`](https://github.com/gn8-ai/universe-alien-signals/commit/2f232307fd687489f507ca197894499c511574b7) Thanks [@junpei-8](https://github.com/junpei-8)! - # Full codebase update 🎉

  This update includes comprehensive improvements across the codebase, focusing on build system optimization, test environment enhancements, and documentation updates.

  Key changes include moonrepo task management refinements, TypeScript configuration standardization, and improved framework compatibility testing.

  <br />

  ## The moonrepo optimization
  - Task management improvements
    - Implementation of tag-based task opt-in functionality
    - Optional task configuration
  - TypeScript configuration optimization
    - Unified output directory (.moon/cache/types)
    - Compiler options improvements
  - CI/CD pipeline improvements
    - Cache configuration optimization
    - GitHub Actions optimization
  - Dependency organization
    - Resolution of circular dependencies
    - Package version updates

  <br />

  ## Test environment improvements
  - Test case optimization
    - Async process improvements (using act())
    - DOM library reference addition

  <br />

  ## Astro Example updates
  - Removal of experimental SVG feature
  - Configuration optimization

  <br />

  ## Documentation updates
  - SSR support status updates
    - SSR compatibility status for each framework
  - Framework-specific Example implementation status
    - Astro framework usage example updates

  <br />

  ## Development environment setup
  - ESLint configuration updates
    - Rule optimization
    - Plugin updates
  - Prettier configuration improvements
    - Configuration file optimization
    - Plugin updates
  - TypeScript configuration standardization
    - Compiler options standardization
    - Type definition organization

  <br />

  ## Dependency management improvements
  - Dependency checking with ncu
  - Automatic update functionality addition

## 0.0.3

### Patch Changes

- [#5](https://github.com/gn8-ai/universe-alien-signals/pull/5) [`0226293`](https://github.com/gn8-ai/universe-alien-signals/commit/0226293e43c44a42c2640ac06dabb1c4f2a156d7) Thanks [@junpei-8](https://github.com/junpei-8)! - Release v0.0.3

## 0.0.2

### Patch Changes

- [#3](https://github.com/gn8-ai/universe-alien-signals/pull/3) [`7569426`](https://github.com/gn8-ai/universe-alien-signals/commit/7569426247b321b7c76f7ec882929d3568d2a19a) Thanks [@junpei-8](https://github.com/junpei-8)! - Release v0.0.2

## 0.0.1

### Patch Changes

- [#1](https://github.com/gn8-ai/universe-alien-signals/pull/1) [`1d47a20`](https://github.com/gn8-ai/universe-alien-signals/commit/1d47a2021169d7a5e2660dc75d99fcd4fdbe7783) Thanks [@junpei-8](https://github.com/junpei-8)! - Release v0.0.1
