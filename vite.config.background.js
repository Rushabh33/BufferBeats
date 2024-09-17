// vite.config.background.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Add this line to import the resolve function

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    lib: {
      formats: ['iife'],
      entry: resolve(__dirname, './src/background.js'),
      name: 'BufferBeats',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'background.js',
        extend: true,
      },
    },
  },
});
