// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kwame-minta2021.github.io',
  integrations: [sitemap()],
  // Inline CSS (~6 kB gzipped) to avoid a render-blocking request on slow connections.
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
});
