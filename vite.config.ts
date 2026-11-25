import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages publishes this project under /7-not-family/.
export default defineConfig({
  plugins: [react()],
  base: '/7-not-family/',
})
