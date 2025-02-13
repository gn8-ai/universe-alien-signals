import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

/**
 * @see {@link https://vite.dev/config | Vite Configuration}
 */
export default defineConfig({
  plugins: [
    /**
     * @see {@link https://github.com/solidjs/vite-plugin-solid#readme | Vite Solid Plugin}
     */
    solid(),
  ],
});
