/// <reference types="bun" />

import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/svelte';
import { afterEach, expect } from 'bun:test';

/**
 * Extends the `expect` function with matchers from `@testing-library/jest-dom`.
 */
expect.extend(matchers);

/**
 * Cleans up the global DOM after each test.
 */
afterEach(() => {
  cleanup();
});
