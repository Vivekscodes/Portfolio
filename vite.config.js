```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add build configuration for production
  build: {
    // Output directory for the build
    outDir: 'dist', 
    // Minify the output files
    minify: 'esbuild', // Can be 'terser' for more aggressive minification
    // Sourcemap generation for debugging (recommended for production)
    sourcemap: true,
  },
  // Configure the server for development
  server: {
    // Port to run the development server on
    port: 3000, 
    // Open the browser automatically
    open: true, 
    // Proxy requests to a backend server (example)
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
```