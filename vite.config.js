import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pati-padhaye-python/',
  server: { host: true },
  build: {
    assetsDir: 'assets'
  }
})