import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

/**
 * Separated from Core due to side effects.
 */
export default typescriptEslint.config(
  // ES Modules
  {
    files: ['**/*.{m,}{js,ts}{x,}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
);
