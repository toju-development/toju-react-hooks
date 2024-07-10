import { defineConfig, mergeConfig } from 'vitest/config'
import { resolve } from 'path';
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    alias: {
      '@Src': resolve(__dirname, 'src')
    },
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts', 'src/types/*'],
      thresholds: {
        lines: 90,
        statements: 90,
        branches: 90,
        functions: 90
      }
    }
  }
}))
