// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://anggapradana.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
