import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Deployed as a GitHub Pages project site at /ShibpurHinduGirlsHighSchool/,
// with the production build output committed to the repo root (see ../ ).
export default defineConfig({
  plugins: [react()],
  base: '/ShibpurHinduGirlsHighSchool/',
  build: {
    outDir: '../dist-site',
    emptyOutDir: true,
  },
})
