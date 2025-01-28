import { deepmerge } from '@fastify/deepmerge';

/**
 * @typedef {(options?: import('@fastify/deepmerge').Options) => (...configs: import('prettier').Config[]) => import('prettier').Config} MergeConfig
 */

/**
 * Merge multiple Prettier configuration objects into a single configuration object.
 */
export const mergeConfig = //
  /**
   * @type {MergeConfig}
   */ (deepmerge)({ all: true });
