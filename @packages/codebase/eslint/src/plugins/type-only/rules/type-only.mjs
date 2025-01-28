import { AST_NODE_TYPES } from '@typescript-eslint/types';
import { defineRule } from '../../../utils/define.mjs';

/**
 * @see {@link https://github.com/jbreckmckye/eslint-plugin-type-only-files | Reference plugin}
 */
export default defineRule({
  meta: {
    type: 'problem',
    docs: {
      description:
        'Makes selected files type-only (so they can be excluded from test coverage, etc.)',
      url: 'https://github.com/jbreckmckye/eslint-plugin-type-only-files/README.md',
    },
    messages: {
      exportTypes: 'Type-only files must only export types.',
      importTypes: 'Type-only files must use type imports only.',
      notTypes: 'Type-only files must declare only types.',
    },
    schema: {
      type: 'array',
      maxItems: 0,
      minItems: 0,
    },
  },

  defaultOptions: [],

  create(ctx) {
    return {
      //  Rather than visiting all the nodes, we only need to query the top level statements.
      Program(program) {
        for (const programNode of program.body) {
          switch (programNode.type) {
            /**
             * Blocking all exports.
             *
             * This is because we cannot determine whether an `export type` statement is exporting an enum.
             *
             * @example Good case
             *
             * ```ts
             * export type * from 'foo';
             * ```
             *
             * @example Bad case
             *
             * ```ts
             * export * from 'foo';
             * ```
             */
            case AST_NODE_TYPES.ExportAllDeclaration: {
              const { exportKind } = programNode;
              if (exportKind !== 'type') {
                ctx.report({
                  node: programNode,
                  messageId: 'exportTypes',
                });
              }

              break;
            }

            /**
             * Blocking default exports.
             *
             * Default exports cannot be types, they must always be an expression, function or class.
             *
             * @example Bad case
             *
             * ```ts
             * export default { ... }
             * ```
             */
            case AST_NODE_TYPES.ExportDefaultDeclaration: {
              ctx.report({
                node: programNode,
                messageId: 'exportTypes',
              });

              break;
            }
            /**
             * Named exports can be either value exports or type exports.
             *
             * @example Good case
             *
             * ```ts
             * export type { Foo, Bar };
             * ```
             *
             * @example Bad case
             *
             * ```ts
             * export { Foo, Bar };
             * ```
             */
            case AST_NODE_TYPES.ExportNamedDeclaration: {
              // Shortcoming: hard to tell if non-type-style export is actually exporting types
              const { exportKind, specifiers } = programNode;

              function checkTypeExport() {
                if (exportKind === 'type') {
                  return true;
                }

                return specifiers.every(
                  (specifier) =>
                    'exportKind' in specifier &&
                    specifier.exportKind === 'type',
                );
              }

              if (!checkTypeExport()) {
                ctx.report({
                  node: programNode,
                  messageId: 'exportTypes',
                });
              }

              break;
            }

            /**
             * Imports can be type imports or value imports.
             *
             * @example Good case
             *
             * ```ts
             * import type * as Foo from 'foo';
             *
             * import type { Foo, Bar } from 'foo';
             *
             * import { type Foo, type Bar } from 'foo';
             * ```
             *
             * @example Bad case
             *
             * ```ts
             * import 'sideEffect';
             *
             * import * as Foo from 'foo';
             *
             * import { Foo, Bar } from 'foo';
             * ```
             */
            case AST_NODE_TYPES.ImportDeclaration: {
              const { importKind, specifiers } = programNode;

              function checkImportKind() {
                if (importKind === 'type') {
                  return true;
                }

                return specifiers.every(
                  (specifier) =>
                    'importKind' in specifier &&
                    specifier.importKind === 'type',
                );
              }

              if (!checkImportKind()) {
                ctx.report({ node: programNode, messageId: 'importTypes' });
              }

              break;
            }

            /**
             * Type aliases and interfaces are allowed.
             *
             * @example Good case
             *
             * ```ts
             * type Foo = string;
             *
             * interface Foo {}
             * ```
             */
            case AST_NODE_TYPES.TSTypeAliasDeclaration:
            case AST_NODE_TYPES.TSInterfaceDeclaration: {
              break;
            }

            /**
             * Ambient declarations like module declarations are limited to type-level constructs.\
             * They can only contain interface declarations and literal value declarations, but cannot include any executable code.
             *
             * @example Good case
             *
             * ```ts
             * declare module 'foo' {
             *   export interface Foo {}
             * }
             * ```
             */
            case AST_NODE_TYPES.TSModuleDeclaration: {
              break;
            }

            /**
             * Other nodes.
             */
            default: {
              /**
               * Allow declare statements.
               *
               * @example Good case
               *
               * ```ts
               * declare const foo: string;
               *
               * declare let foo: string;
               *
               * declare var foo: string;
               *
               * declare function foo(): void;
               *
               * declare class Foo {}
               * ```
               */
              if ('declare' in programNode && programNode.declare === true) {
                break;
              }

              /**
               * Ban all other nodes.
               */
              ctx.report({
                node: programNode,
                messageId: 'notTypes',
              });
            }
          }
        }
      },
    };
  },
});
