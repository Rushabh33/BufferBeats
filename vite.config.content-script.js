import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    emptyOutDir: false, // Consider setting this to true if you want a clean build each time
    outDir: resolve(__dirname, 'dist'), // Specify output directory
    lib: {
      formats: ['iife'], // Content scripts work well as IIFE
      entry: resolve(__dirname, './src/content-script.js'),
      name: 'BufferBeats', // The global name isn't strictly necessary for content scripts
    },
    rollupOptions: {
      output: {
        entryFileNames: 'content-script.js',
      },
    },
  },
});
