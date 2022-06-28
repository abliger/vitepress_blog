import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig((env) => {
  // const mode = env.mode === 'development'
  return {
    plugins: [
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      })
    ],
    server: { // 开发设置
      host: true,
      port: 8080,
      open: false,
      proxy: {
        '/blog': 'http://localhost:8000',
      },
      cors: true
    }
  }
})
