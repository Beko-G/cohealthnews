import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cohealthnews.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
