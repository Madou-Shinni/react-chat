import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(),react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  server: {
    proxy: {
      // 代理所有`/api`的请求
      '/api': {
        target: 'http://127.0.0.1:8000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  }
})
