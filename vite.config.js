import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work.html'),
        contact: resolve(__dirname, 'contact.html'),
        nike: resolve(__dirname, 'nike-air-max.html'),
        spotify: resolve(__dirname, 'spotify-wrapped.html'),
        cyberpunk: resolve(__dirname, 'cyberpunk-2077-ui.html'),
        vision: resolve(__dirname, 'vision-vr-pro.html'),
        playstation: resolve(__dirname, 'playstation-5-pro.html'),
        architecture: resolve(__dirname, 'architecture-brio-studio.html')
      }
    }
  }
})
