import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  root: 'src',
  publicDir: 'public',
  integrations: [tailwind()],
  site: 'https://jaum3fp.github.io',
  //base: '/Jalumnefp.github.io'
});
