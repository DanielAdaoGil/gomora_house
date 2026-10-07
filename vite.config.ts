import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// base './' => funciona em qualquer nome de repositório no GitHub Pages (usa HashRouter)
export default defineConfig({ base: './', plugins: [react(), tailwindcss()], build:{chunkSizeWarningLimit:1500} })
