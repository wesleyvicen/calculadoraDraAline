import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192x192.png', 'icon-512x512.png'],
      manifest: {
        name: 'Calculadora de Taxas - Dra Aline',
        short_name: 'Calculadora Dra Aline',
        description: 'Aplicativo para simular taxas no cartão de crédito e cálculos médicos',
        theme_color: '#4285f4',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icon-192x192.png',
            type: 'image/png',
            sizes: '192x192'
          },
          {
            src: 'icon-512x512.png',
            type: 'image/png', 
            sizes: '512x512'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'build',
    sourcemap: true
  },
  // Configuração para resolver imports absolutos se necessário
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // Configurar esbuild para tratar .js como JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})