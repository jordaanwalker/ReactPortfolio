import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
   base: '/reactportfolio/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
});
