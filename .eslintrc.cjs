module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ["dist", "node_modules", "vite.config.ts", "tsconfig.json", "vitest.config.ts", ".eslintrc.cjs", "commitlint.config.cjs"],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'react-hooks',
    "simple-import-sort",
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "prefer-regex-literals": "off",
  },
}
