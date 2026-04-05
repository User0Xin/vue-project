import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080, // 前端开发服务器端口
    proxy: {
      // 代理所有以 '/api' 开头的请求
      '/api': {
        target: 'http://localhost:8989', // 真实的后端API地址
        changeOrigin: true, // 改变请求头中的Origin为目标地址，虚拟一个同源身份
        rewrite: (path) => path.replace(/^\/api/, '') // （可选）重写请求路径，去掉/api前缀
      }
    }
  },

  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
