import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

/**
 * @see {@link https://astro.build/config | Astro Configuration}
 */
export default defineConfig({
  integrations: [
    /**
     * @see {@link https://docs.astro.build/guides/integrations-guide/react | Astro React Integration}
     */
    react({ include: ['**/*.react.tsx'] }),

    /**
     * @see {@link https://docs.astro.build/guides/integrations-guide/solid-js | Astro Solid Integration}
     */
    solid({ include: ['**/*.solid.tsx'] }),

    /**
     * @see {@link https://docs.astro.build/guides/integrations-guide/vue | Astro Vue Integration}
     */
    vue(),
  ],
});
