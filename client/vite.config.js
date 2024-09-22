import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: '82.112.240.178:8080',
        secure: false
      },
    },
  },
  plugins: [react()],
})
