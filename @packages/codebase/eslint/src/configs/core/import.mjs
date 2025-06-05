// @ts-expect-error: No declaration file.
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import typescriptEslint from 'typescript-eslint';

/**
 * Import configuration.
 *
 * @see {@link https://www.npmjs.com/package/eslint-plugin-import | Import ESLint Plugin}
 * @see {@link https://www.npmjs.com/package/eslint-plugin-perfectionist | Perfectionist ESLint Plugin}
 */
export default typescriptEslint.config(
  /**
   * "Import" plugin.
   *
   * @see https://github.com/import-js/eslint-plugin-import#readme
   */
  {
    settings: {
      'import/resolver': { typescript: true },
    },
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      import: importPlugin,
    },
    rules: {
      /**
       * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
       */
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],

      /**
       * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
       */
      'import/no-duplicates': [
        'warn',
        {
          'prefer-inline': true,
          considerQueryString: true,
        },
      ],

      /**
       * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
       */
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/{,__}{test,spec,development}{,__,s,s__}/**/*',
            '**/*.{test,spec,config,dev,development}.*',
          ],
        },
      ],
    },
  },

  /**
   * "Perfectionist" plugin.
   *
   * @see https://perfectionist.dev
   */
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      /**
       * @see https://perfectionist.dev/rules/sort-imports
       */
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'natural',
          newlinesBetween: 'never',
          internalPattern: ['^~/.*', '^:/.*'],
          groups: [
            'builtin',
            'builtin-type',
            'external',
            'external-type',
            'internal',
            'internal-type',
            'parent',
            'parent-type',
            'sibling',
            'sibling-type',
            'index',
            'index-type',
            'style',
            'object',
            'unknown',
          ],
        },
      ],

      /**
       * @see https://perfectionist.dev/rules/sort-exports
       */
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'natural',
          groupKind: 'values-first',
        },
      ],

      /**
       * @see https://perfectionist.dev/rules/sort-named-imports
       */
      'perfectionist/sort-named-imports': [
        'warn',
        {
          type: 'natural',
          groupKind: 'values-first',
        },
      ],

      /**
       * @see https://perfectionist.dev/rules/sort-named-exports
       */
      'perfectionist/sort-named-exports': [
        'warn',
        {
          type: 'natural',
          groupKind: 'values-first',
        },
      ],
    },
  },
);
