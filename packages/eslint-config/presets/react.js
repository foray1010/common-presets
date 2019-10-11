'use strict'

const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  extends: ['plugin:react/recommended', 'eslint-config-prettier/react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
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
