import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
// before
// export default defineConfig({
//   plugins: [vue()]
// })

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  const USE_MOCK = process.env.VITE_APP_USE_MOCK === 'true'
  console.log('[log] using mock: ', USE_MOCK)

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
        '@api-mock': USE_MOCK
          ? path.resolve('src/api-mock')
          : path.resolve('src/empty'),
        'axios-mock-adapter': USE_MOCK
          ? 'axios-mock-adapter/dist/axios-mock-adapter.min.js'
          : path.resolve('src/empty')
      }
    },
    server: {
      port: 3000,
      proxy: {
        '^/api': {
          target: process.env.VITE_APP_API_ADDRESS,
          changeOrigin: true,
          followRedirects: true // support website that use redirects (like google.com)
        }
      }
    }
  })
}
