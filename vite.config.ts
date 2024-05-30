import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styleui": path.resolve(__dirname, "src/styleui"),
      "@tailwindworkshop": path.resolve(__dirname, "src/tailwindworkshop"),
      "@antframework": path.resolve(__dirname, "src/antframework"),
      "@globalredux": path.resolve(__dirname, "src/globalredux"),
      "@store": path.resolve(__dirname, "src/store"),
      "@apicourse": path.resolve(__dirname, "src/apicourse"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@pokemon": path.resolve(__dirname, "src/pokemon"),
      "@service": path.resolve(__dirname, "src/service"),
      "@workshoppokemon": path.resolve(__dirname, "src/workshoppokemon"),
      "@quiz": path.resolve(__dirname, "src/quiz"),
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  base:"/assignmentquiz",
  server: {
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  }


})
