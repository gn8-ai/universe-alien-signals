import { mergeConfig } from '../utils/config/merge-config.mjs';
import astro from './core/astro.mjs';
import base from './core/base.mjs';
import jsdoc from './core/jsdoc.mjs';
import sh from './core/sh.mjs';

/**
 * Prettier configuration.
 *
 * - Base
 * - JSDoc
 * - Shell
 * - Astro
 */
export const core = mergeConfig(base, jsdoc, sh, astro);
