import { signal } from 'alien-signals';

/**
 * Counter signal that can be shared across components
 */
export const $counter = signal(0);
