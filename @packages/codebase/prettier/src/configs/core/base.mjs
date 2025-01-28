import { createRequire } from 'node:module';

/**
 * @see {@link https://nodejs.org/api/module.html#modulecreaterequirefilename | Document}
 */
const require = createRequire(import.meta.url);

/**
 * @type {import('prettier').Config}
 *
 * @see {@link https://prettier.io/docs/en/options | Document}
 */
export default {
  // Load plugins
  plugins: [
    // "Ignore" plugin
    require.resolve('../../plugins/ignore/index.mjs'),
  ],

  // Base rules
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',
};
