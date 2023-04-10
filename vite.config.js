import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 这里使用nodejs的模块，可能会报错，需要安装node的类型声明文件
// const path = require('path')
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      '@': resolve(__dirname, "./src")
    }
  }
})
