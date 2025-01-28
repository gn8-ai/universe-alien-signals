import typescriptEslint from 'typescript-eslint';
import browserGlobal from './browser/global.mjs';
import base from './core/base.mjs';
import import_ from './core/import.mjs';
import javascript from './core/javascript.mjs';
import jsdoc from './core/jsdoc.mjs';
import typescript from './core/typescript.mjs';

/**
 * ESLint configuration.
 *
 * - Base
 * - JavaScript
 * - TypeScript
 * - JSDoc
 * - Import
 */
export const core = typescriptEslint.config(
  ...base,
  ...javascript,
  ...typescript,
  ...jsdoc,
  ...import_,
);

/**
 * ESLint configuration for Browser.
 *
 * - Base
 * - JavaScript
 * - TypeScript
 * - JSDoc
 * - Import
 * - Browser
 */
export const browser = typescriptEslint.config(...core, ...browserGlobal);
