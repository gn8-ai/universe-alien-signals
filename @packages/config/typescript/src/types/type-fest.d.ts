import type TypeFest from 'type-fest';

declare global {
  /**
   * Matches any primitive value.
   */
  type Primitive = TypeFest.Primitive;
}

export {};
