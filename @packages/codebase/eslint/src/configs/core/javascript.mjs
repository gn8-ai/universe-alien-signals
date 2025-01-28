import js from '@eslint/js';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import { IS_PRODUCTION } from '../../utils/environment.mjs';

/**
 * JavaScript configuration.
 *
 * @see {@link https://www.npmjs.com/package/eslint | ESLint}
 */
export default typescriptEslint.config(
  // ESLint recommended rules
  js.configs.recommended,

  // Basic rules
  {
    rules: {
      /**
       * @see https://eslint.org/docs/rules/no-console
       */
      'no-console': IS_PRODUCTION ? 'error' : 'off',

      /**
       * @see https://eslint.org/docs/rules/no-debugger
       */
      'no-debugger': IS_PRODUCTION ? 'error' : 'off',

      /**
       * @see https://eslint.org/docs/rules/no-undef
       */
      'no-undef': 'off',

      /**
       * @see https://eslint.org/docs/rules/no-empty
       */
      'no-empty': 'warn',

      /**
       * @see https://eslint.org/docs/rules/no-unused-vars
       */
      'no-unused-vars': 'warn',

      /**
       * @see https://eslint.org/docs/rules/no-else-return
       */
      'no-else-return': 'warn',

      /**
       * @see https://eslint.org/docs/rules/no-empty-function
       */
      'no-empty-function': 'off',

      /**
       * @see https://eslint.org/docs/rules/no-use-before-define
       */
      'no-use-before-define': 'off',

      /**
       * @see https://eslint.org/docs/rules/no-constant-condition
       */
      'no-constant-condition': 'warn',

      /**
       * @see https://eslint.org/docs/rules/no-return-await
       */
      'no-return-await': 'warn',

      /**
       * @see https://eslint.org/docs/rules/require-await
       */
      'require-await': 'warn',

      /**
       * @see https://eslint.org/docs/rules/func-style
       */
      'func-style': ['warn', 'declaration'],

      /**
       * @see https://eslint.org/docs/rules/arrow-body-style
       */
      'arrow-body-style': ['warn', 'as-needed'],

      /**
       * @see https://eslint.org/docs/rules/prefer-arrow-callback
       */
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],

      /**
       * @see https://eslint.style/rules/default/quotes
       */
      'spaced-comment': [
        'warn',
        'always',
        {
          line: { markers: ['/'] },
          block: { exceptions: ['=', '#__PURE__'], balanced: true },
        },
      ],
    },
  },

  // CommonJS
  {
    files: ['**/*.c{js,ts}{x,}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },

  // ES Modules
  {
    files: ['**/*.{,m}{js,ts}{x,}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.es2025,
      },
    },
  },
);
