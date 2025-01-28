import { defineConfig } from 'tsup';

/**
 * Tsup configuration for the alien-signals-react library.
 *
 * @see {@link https://tsup.egoist.dev | Docs}
 */
export default defineConfig({
  entry: ['src/index.ts'],
  external: ['vue', 'alien-signals'],
  format: ['esm', 'cjs'],
  tsconfig: 'tsconfig.build.json',
  dts: true,
  clean: true,
  minify: true,
});
