import { readFile } from 'node:fs/promises';
import { transformAsync } from '@babel/core';
import jsx, { type VueJSXPluginOptions } from '@vue/babel-plugin-jsx';
import { plugin, type BunPlugin } from 'bun';

/**
 * @param   options {@link VueJSXPluginOptions}
 *
 * @returns         Bun plugin for Vue.js
 *
 * @see {@link https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue-jsx/src/index.ts | vite-plugin-vue}
 */
function vueJsxPlugin(options: VueJSXPluginOptions = {}): BunPlugin {
  return {
    name: 'bun-plugin-vue',
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
            plugins: [[jsx, options]],
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
 * Loads the vue jsx plugin.
 */
await plugin(vueJsxPlugin());
