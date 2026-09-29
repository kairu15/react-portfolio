// ------------------------------------------------------------------
// vite.config.js
// Wires @tailwindcss/vite plugin + /api dev proxy to the Laravel API
// ------------------------------------------------------------------
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        // Laravel API dev server (php artisan serve --port=8010)
        target: 'http://127.0.0.1:8010',
        changeOrigin: true,
      },
    },
  },
})

