import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteFaviconsPlugin } from "vite-plugin-favicon"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
       "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [react()]
})
