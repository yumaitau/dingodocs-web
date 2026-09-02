import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dingodocs.yumait.au',
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
});
