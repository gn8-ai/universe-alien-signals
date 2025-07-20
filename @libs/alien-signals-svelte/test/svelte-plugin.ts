import { readFile } from 'node:fs/promises';
import { plugin, type BunPlugin } from 'bun';
import { compile, compileModule } from 'svelte/compiler';

/**
 * Bun plugin for compiling Svelte components. This plugin allows Bun to understand and compile .svelte files during testing. It also handles .svelte.js and .svelte.ts files which can use Svelte runes.
 *
 * @returns Bun plugin for Svelte
 */
function sveltePlugin(): BunPlugin {
  return {
    name: 'bun-plugin-svelte',
    setup: (build) => {
      // Handle .svelte files
      build.onLoad({ filter: /\.svelte$/i }, async (args) => {
        // Read the Svelte component file
        const source = await readFile(args.path, 'utf8');

        // Compile the Svelte component
        const result = compile(source, {
          filename: args.path,
          generate: 'client',
          dev: false,
          css: 'injected',
        });

        // Return the compiled JavaScript code
        return {
          contents: result.js.code,
          loader: 'js',
        };
      });

      // Handle .svelte.js and .svelte.ts files (which can use runes)
      build.onLoad({ filter: /\.svelte\.(js|ts)$/i }, async (args) => {
        // Read the file
        const source = await readFile(args.path, 'utf8');

        // Compile the Svelte module script
        const result = compileModule(source, {
          filename: args.path,
          generate: 'client',
          dev: false,
        });

        // Return the compiled JavaScript code
        return {
          contents: result.js.code,
          loader: 'js',
        };
      });
    },
  };
}

/**
 * Loads the Svelte plugin for Bun test runner.
 */
await plugin(sveltePlugin());
