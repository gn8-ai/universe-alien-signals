import type TypeFest from 'type-fest';

declare global {
  /**
   * Matches any primitive value.
   */
  type Primitive = TypeFest.Primitive;

  /**
   * Literal union.
   */
  type Literal<LiteralType, BaseType extends Primitive> = TypeFest.LiteralUnion<
    LiteralType,
    BaseType
  >;
}

export {};
