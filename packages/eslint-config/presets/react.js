'use strict'

const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  extends: [
    'plugin:jest-dom/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'eslint-config-prettier/react',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-jest-dom',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-testing-library',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
}
