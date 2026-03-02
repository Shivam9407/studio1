import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        'architecture-brio-studio': resolve(__dirname, 'architecture-brio-studio.html'),
        'contact': resolve(__dirname, 'contact.html'),
        'cyberpunk-2077-ui': resolve(__dirname, 'cyberpunk-2077-ui.html'),
        'index': resolve(__dirname, 'index.html'),
        'nike-air-max': resolve(__dirname, 'nike-air-max.html'),
        'playstation-5-pro': resolve(__dirname, 'playstation-5-pro.html'),
        'spotify-wrapped': resolve(__dirname, 'spotify-wrapped.html'),
        'vision-vr-pro': resolve(__dirname, 'vision-vr-pro.html'),
        'work': resolve(__dirname, 'work.html')
      }
    }
  }
})
