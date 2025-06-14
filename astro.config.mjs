import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  devOptions: {
    // Disable the dev toolbar
    debug: false,
  },
  site: 'https://phorch69.github.io',
  base: '/Home',
});