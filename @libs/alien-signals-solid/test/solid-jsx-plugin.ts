import { readFile } from 'node:fs/promises';
import { transformAsync } from '@babel/core';
// @ts-expect-error: No types for babel-preset-solid.
import solidPreset from 'babel-preset-solid';
import { plugin, type BunPlugin } from 'bun';

/**
 * Pass any additional [babel-plugin-jsx-dom-expressions](https://github.com/ryansolid/dom-expressions/tree/main/packages/babel-plugin-jsx-dom-expressions#plugin-options).\
 * They will be merged with the defaults sets by [babel-preset-solid](https://github.com/solidjs/solid/blob/main/packages/babel-preset-solid/index.js#L8-L25).
 *
 * @see {@link https://github.com/solidjs/vite-plugin-solid/blob/main/src/index.ts#L75-L145 | Babel Preset Solid Options}
 */
export interface SolidPluginOptions {
  /**
   * Removed unnecessary closing tags from template strings. More info here: https://github.com/solidjs/solid/blob/main/CHANGELOG.md#smaller-templates
   *
   * @default false
   */
  omitNestedClosingTags?: boolean;

  /**
   * The name of the runtime module to import the methods from.
   *
   * @default 'solid-js/web'
   */
  moduleName?: string;

  /**
   * The output mode of the compiler. Can be:
   *
   * - "dom" is standard output
   * - "ssr" is for server side rendering of strings.
   * - "universal" is for using custom renderers from solid-js/universal
   *
   * @default 'dom'
   */
  generate?: 'ssr' | 'dom' | 'universal';

  /**
   * Indicate whether the output should contain hydratable markers.
   *
   * @default false
   */
  hydratable?: boolean;

  /**
   * Boolean to indicate whether to enable automatic event delegation on camelCase.
   *
   * @default true
   */
  delegateEvents?: boolean;

  /**
   * Boolean indicates whether smart conditional detection should be used. This optimizes simple boolean expressions and ternaries in JSX.
   *
   * @default true
   */
  wrapConditionals?: boolean;

  /**
   * Boolean indicates whether to set current render context on Custom Elements and slots. Useful for seemless Context API with Web Components.
   *
   * @default true
   */
  contextToCustomElements?: boolean;

  /**
   * Array of Component exports from module, that aren't included by default with the library. This plugin will automatically import them if it comes across them in the JSX.
   *
   * @default ['For', 'Show', 'Switch', 'Match', 'Suspense', 'SuspenseList', 'Portal', 'Index', 'Dynamic', 'ErrorBoundary']
   */
  builtIns?: string[];
}

/**
 * @param   options {@link SolidPluginOptions}
 *
 * @returns         Bun plugin for Solid.js
 *
 * @see {@link https://github.com/DaniGuardiola/bun-plugin-solid/blob/main/src/index.ts | bun-plugin-solid}
 * @see {@link https://github.com/solidjs/vite-plugin-solid/blob/main/src/index.ts | babel-preset-solid}
 */
export default function solidJsxPlugin(
  options: SolidPluginOptions = {},
): BunPlugin {
  return {
    name: 'bun-plugin-solid',
    setup: (build) => {
      build.onLoad({ filter: /\.[mc]?[tj]sx$/i }, async (args) => {
        const isTypescript = /\.[mc]?tsx$/i.test(args.path);

        // Parse plugins.
        const plugins: NonNullable<
          NonNullable<babel.TransformOptions['parserOpts']>['plugins']
        > = ['jsx'];

        // Add typescript parser if the file is a typescript file.
        if (isTypescript) plugins.push('typescript');

        // Transform the file.
        const transforms = await transformAsync(
          await readFile(args.path, 'utf8'),
          {
            filename: args.path,
            sourceFileName: args.path,
            presets: [[solidPreset, options]],
            ast: false,
            sourceMaps: true,
            configFile: false,
            babelrc: false,
            parserOpts: { plugins },
          },
        );

        // Return the transformed code.
        return {
          contents: transforms!.code!,
          loader: 'js',
        };
      });
    },
  };
}

/**
 * Loads the solid-js plugin.
 */
await plugin(solidJsxPlugin({ generate: 'dom' }));
