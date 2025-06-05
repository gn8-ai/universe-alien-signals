import { createRequire } from 'node:module';

/**
 * @see {@link https://nodejs.org/api/module.html#modulecreaterequirefilename | Document}
 */
const require = createRequire(import.meta.url);

/**
 * JSDoc configuration.
 *
 * @type {import('prettier').Config}
 *
 * @see {@link https://github.com/hosseinmd/prettier-plugin-jsdoc#readme | Document}
 */
export default {
  /**
   * Load the JSDoc plugin.
   */
  plugins: [require.resolve('prettier-plugin-jsdoc')],

  /**
   * Enable TSDoc support.
   */
  tsdoc: true,

  /**
   * Specifies the line wrapping condition for comments.
   */
  jsdocPrintWidth: Infinity,

  /**
   * Specifies whether to separate tags by groups.
   */
  jsdocSeparateTagGroups: true,

  /**
   * Specifies whether to separate returns from parameters.
   */
  jsdocSeparateReturnsFromParam: false,

  /**
   * Specifies whether to convert code blocks to code fences.
   */
  jsdocPreferCodeFences: true,

  /**
   * Specifies whether to vertically align tags.\
   * If true, tag descriptions will be aligned to start from the same position.
   */
  jsdocVerticalAlignment: true,

  /**
   * Specifies whether to capitalize descriptions.
   */
  jsdocCapitalizeDescription: false,

  /**
   * Specifies whether to split comment lines into multiple lines.
   */
  jsdocCommentLineStrategy: 'keep',

  /**
   * Specifies whether to preserve indentation in Example section code.
   */
  jsdocKeepUnParseAbleExampleIndent: true,
};
