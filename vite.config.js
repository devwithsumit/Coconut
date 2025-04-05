/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server : {
    proxy : {
      '/dapi' : 'http://localhost:5173',
    }
  },
  test:{
     globals: true,
     environment: 'jsdom',
     css: true,
     setupFiles: './src/test/setup.js'
  }
})
