import { createRequire } from 'node:module';
import { includeIgnoreFile } from '@eslint/compat';
import { globalIgnores } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';

/**
 * @see {@link https://nodejs.org/api/module.html#modulecreaterequirefilename | Document}
 */
const { resolve } = createRequire(import.meta.url);

/**
 * Base configuration.
 */
export default typescriptEslint.config(
  /**
   * Loads the .gitignore file as ESLint ignore patterns.\
   * Files and directories listed in .gitignore will be excluded from ESLint checks.
   *
   * @see https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-file
   */
  includeIgnoreFile(resolve('../../../../../../.gitignore')),

  /**
   * @see https://eslint.org/docs/latest/use/configure/ignore
   */
  globalIgnores(['**/*.d.{,c,m}ts{,x}']),
);
