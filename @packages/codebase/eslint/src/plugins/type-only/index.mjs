import typeOnly from './rules/type-only.mjs';

/**
 * @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Plugin}
 */
export default {
  rules: {
    check: typeOnly,
  },
};
