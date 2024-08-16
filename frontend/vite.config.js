import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/users': 'http://localhost:3000/api/v1',
      '/users': 'https://exam-portal-backend-wvpw.onrender.com/api/v1'
    }
  },
  plugins: [react()],
})
