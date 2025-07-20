import { defineConfig } from 'tsup';

/**
 * Tsup configuration for the alien-signals-svelte library.
 *
 * @see {@link https://tsup.egoist.dev | Docs}
 */
export default defineConfig({
  entry: ['src/index.ts'],
  external: ['svelte', 'alien-signals'],
  format: ['esm'],
  tsconfig: 'tsconfig.build.json',
  dts: true,
  clean: true,
  minify: true,
  treeshake: true,
});
