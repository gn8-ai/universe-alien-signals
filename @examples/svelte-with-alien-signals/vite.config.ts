import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

/**
 * Vite configuration for the svelte-with-alien-signals example.
 *
 * @see {@link https://vite.dev/config/ | Docs}
 */
export default defineConfig({
  plugins: [
    /**
     * @see {@link https://github.com/sveltejs/vite-plugin-svelte#readme | Svelte Vite Plugin}
     */
    // @ts-expect-error: Svelte plugin is not supported by the latest version of Vite
    svelte(),
  ],
});
