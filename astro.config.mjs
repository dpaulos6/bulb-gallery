import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

console.log(result.parsed);

export default defineConfig({
  integrations: [react(), tailwind()],
  env: {
    ...process.env,
  },
});