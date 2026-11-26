
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog.html'),
        post: resolve(__dirname, 'post.html'),
        service: resolve(__dirname, 'service.html'),
        wireframe: resolve(__dirname, 'wireframe.html'),
      },
    },
  },
});
