import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/didactic-octo-winner/',
  plugins: [react()],
})
