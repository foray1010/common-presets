'use strict'

const restrictedGlobals = require('confusing-browser-globals')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:compat/recommended'],
  plugins: ['eslint-plugin-compat'],
  env: {
    browser: true,
  },
  rules: {
    'no-restricted-globals': ['error', ...restrictedGlobals],
  },
}
