---
'@gn8/alien-signals-react': patch
'@gn8/alien-signals-solid': patch
'@gn8/alien-signals-vue': patch
---

# Full codebase update 🎉

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
