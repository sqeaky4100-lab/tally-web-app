import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The design system lives at ./design-system and is imported directly by the app
// (JSX sources, token CSS, icon data). Nothing is copied or forked.
export default defineConfig({
  plugins: [react({ include: /\.jsx?$/ })],
  build: { outDir: 'dist', sourcemap: false },
});
