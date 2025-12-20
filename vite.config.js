import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdownBlogPlugin from './vite-plugin-blog.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdownBlogPlugin()],

  // Build optimizations for faster load times
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },

    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
        }
      }
    },

    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Enable source maps for debugging (can disable in prod)
    sourcemap: false,

    // Chunk size warning at 500kb
    chunkSizeWarningLimit: 500
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },

  // Enable gzip compression hints
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
