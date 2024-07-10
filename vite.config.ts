import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'toju-react-hooks',
      fileName: 'toju-react-hooks'
    },
    sourcemap: true,
    target: 'es6',
    minify: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({ 
      outDir: 'dist', 
      exclude: ['**/*.test.ts'] 
    }),
    tsconfigPaths()
  ],
  resolve: {
    alias: {
      '@Src': resolve(__dirname, 'src')
    }
  }
})
