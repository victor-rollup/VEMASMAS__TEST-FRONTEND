import { defineConfig } from 'vite'
import buildVueApplication from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const APPLICATION_SOURCE_PATH = fileURLToPath(new URL('./source', import.meta.url))
export default defineConfig({
  plugins: [ buildVueApplication() ],
  resolve: {
    alias: {
      '@': APPLICATION_SOURCE_PATH,
    },
  }
})
