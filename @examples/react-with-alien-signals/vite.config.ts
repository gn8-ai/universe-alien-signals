import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * @see {@link https://vite.dev/config | Vite Configuration}
 */
export default defineConfig({
  plugins: [
    /**
     * @see {@link https://github.com/vitejs/vite-plugin-react#readme | Vite React Plugin}
     */
    react(),
  ],
});
