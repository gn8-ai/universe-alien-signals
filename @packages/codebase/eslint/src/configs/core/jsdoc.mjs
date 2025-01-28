import jsdocPlugin from 'eslint-plugin-jsdoc';
import typescriptEslint from 'typescript-eslint';

/**
 * JSDoc configuration.
 *
 * @see {@link https://www.npmjs.com/package/eslint-plugin-jsdoc | JSDoc ESLint Plugin}
 */
export default typescriptEslint.config(
  // Load the JSDoc plugin
  {
    plugins: { jsdoc: jsdocPlugin },
  },

  // JSDoc support for JavaScript
  {
    files: ['**/*.{,c,m}js{,x}'],
    extends: [jsdocPlugin.configs['flat/recommended']],
  },

  // JSDoc support for typescript
  {
    files: ['**/*.{,c,m}ts{,x}'],
    extends: [jsdocPlugin.configs['flat/recommended-typescript']],
  },

  // JSDoc rules
  {
    rules: {
      /**
       * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md
       */
      'jsdoc/tag-lines': 'off',

      /**
       * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md
       */
      'jsdoc/check-tag-names': ['warn', { definedTags: ['remarks'] }],

      /**
       * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md
       */
      'jsdoc/require-jsdoc': [
        'warn',
        {
          fixerMessage: ' TODO: Add JSDoc comment.',
          require: { FunctionDeclaration: false },
          contexts: [
            'Program > ClassDeclaration',
            'Program > ClassExpression',
            'Program > VariableDeclaration',
            'Program > FunctionDeclaration',
            'Program > FunctionExpression',
            'Program > ArrowFunctionExpression',
            'Program > TSInterfaceDeclaration',
            'Program > TSTypeAliasDeclaration',
            'Program > TSEnumDeclaration',
            'Program > ExpressionStatement > CallExpression',
            'Program > ExpressionStatement:has(AwaitExpression > CallExpression)',
            'ReturnStatement > ClassExpression',
            'ReturnStatement > FunctionExpression',
            'ReturnStatement > ArrowFunctionExpression',
            'ExportDefaultDeclaration:not(:has(Identifier))',
            'ExportNamedDeclaration:has(VariableDeclaration)',
            'ExportNamedDeclaration:has(ClassExpression)',
            'ExportNamedDeclaration:has(FunctionExpression)',
            'ExportNamedDeclaration:has(ArrowFunctionExpression)',
          ],
        },
      ],
    },
  },
);
