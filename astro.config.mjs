// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // trailingSlash: "always",
  // build: {
  //   format: "directory",
  // },
  output: 'server',
  adapter: vercel(),
});
