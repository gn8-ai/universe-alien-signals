import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

/**
 * @see {@link https://vite.dev/config | Vite Configuration}
 */
export default defineConfig({
  plugins: [
    /**
     * @see {@link https://github.com/vitejs/vite-plugin-vue#readme | Vite Vue Plugin}
     */
    vue(),
  ],
});
