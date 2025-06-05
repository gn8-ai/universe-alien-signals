import { createRequire } from 'node:module';

/**
 * @see {@link https://nodejs.org/api/module.html#modulecreaterequirefilename | Document}
 */
const require = createRequire(import.meta.url);

/**
 * @type {import('prettier').Config}
 *
 * @see {@link https://github.com/withastro/prettier-plugin-astro?tab=readme-ov-file#prettier-plugin-for-astro | Document}
 * @see {@link https://www.npmjs.com/package/prettier-plugin-astro | Document (npm)}
 */
export default {
  /**
   * Load the Astro plugin.
   */
  plugins: [require.resolve('prettier-plugin-astro')],

  /**
   * Allow shorthand syntax.
   */
  astroAllowShorthand: true,

  /**
   * Override settings to specify the parser for Astro files.
   */
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
