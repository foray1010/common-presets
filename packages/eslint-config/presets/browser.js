'use strict'

const restrictedGlobals = require('confusing-browser-globals')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:compat/recommended'],
  plugins: ['eslint-plugin-compat'],
  env: {
    browser: true,
    webextensions: true,
  },
  globals: {
    // keep it until webpack has an official way to define env: https://github.com/webpack/webpack/issues/15833
    process: 'readonly',
  },
  rules: {
    'no-restricted-globals': ['error', ...restrictedGlobals],
    // frontend environment doesn't support node.js modules
    'import/no-nodejs-modules': 'error',
  },
}
