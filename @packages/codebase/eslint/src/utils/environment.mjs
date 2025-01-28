/**
 * Check if the environment is production.
 */
export const IS_PRODUCTION =
  process.env.NODE_ENV === 'production' ||
  process.env.IS_PRODUCTION === 'true' ||
  process.env.IS_PRODUCTION === '1' ||
  process.env.IS_PROD === 'true' ||
  process.env.IS_PROD === '1';
