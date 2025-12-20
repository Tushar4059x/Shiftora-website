import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import markdownBlogPlugin from './vite-plugin-blog.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), markdownBlogPlugin()],
})
