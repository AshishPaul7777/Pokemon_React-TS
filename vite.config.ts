import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

import viteReact from '@vitejs/plugin-react'



export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
  
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    tailwindcss(),
    
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})