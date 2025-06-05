import { createRequire } from 'node:module';

/**
 * @see {@link https://nodejs.org/api/module.html#modulecreaterequirefilename | Document}
 */
const require = createRequire(import.meta.url);

/**
 * @type {Partial<import('prettier-plugin-sh').ShParserOptions>}
 *
 * @see {@link https://github.com/un-ts/prettier/tree/master/packages/sh#readme | Document}
 */
export default {
  /**
   * Load the sh plugin.
   */
  plugins: [require.resolve('prettier-plugin-sh')],
};
