import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslint from 'typescript-eslint';
import typeOnly from '../../plugins/type-only/index.mjs';

/**
 * Typescript configuration.
 *
 * @see {@link https://www.npmjs.com/package/typescript-eslint | Typescript ESLint}
 */
export default typescriptEslint.config(
  // Typescript eslint recommended rules
  ...typescriptEslint.configs.recommended,

  // Core configs
  {
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },

  // Basic rules
  {
    rules: {
      /**
       * @see https://typescript-eslint.io/rules/no-namespace
       */
      '@typescript-eslint/no-namespace': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-unused-vars
       */
      '@typescript-eslint/no-unused-vars': 'warn',

      /**
       * @see https://typescript-eslint.io/rules/no-explicit-any
       */
      '@typescript-eslint/no-explicit-any': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-empty-function
       */
      '@typescript-eslint/no-empty-function': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-empty-interface
       */
      '@typescript-eslint/no-empty-interface': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-empty-object-type
       */
      '@typescript-eslint/no-empty-object-type': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-use-before-define
       */
      '@typescript-eslint/no-use-before-define': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-non-null-assertion
       */
      '@typescript-eslint/no-non-null-assertion': 'off',

      /**
       * @see https://typescript-eslint.io/rules/no-this-alias
       */
      '@typescript-eslint/no-this-alias': ['error', { allowedNames: ['self'] }],
    },
  },

  // Declaration files
  {
    files: ['**/*.{d,type}.{,c,m}ts{,x}'],
    rules: {
      /**
       * @see https://typescript-eslint.io/rules/no-var-requires
       */
      'no-var': 'off',

      /**
       * @see https://typescript-eslint.io/rules/triple-slash-reference
       */
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Type-only files
  {
    files: ['**/*.type.{,c,m}ts{,x}'],
    plugins: {
      'type-only': typeOnly,
    },
    rules: {
      'type-only/check': 'error',
    },
  },
);
