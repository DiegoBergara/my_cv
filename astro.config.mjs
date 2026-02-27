import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://diegobergara.github.io',
  base: basePath,
  output: 'static',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
