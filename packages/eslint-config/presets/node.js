'use strict'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['eslint-plugin-n'],
  env: {
    node: true,
  },
  rules: {
    // disallow deprecated node APIs
    'n/no-deprecated-api': 'error',
    // disallow the assignment to `exports`
    'n/no-exports-assign': 'error',
    // disallow `bin` files that npm ignores
    'n/no-unpublished-bin': 'error',
    // disallow unsupported Node.js built-in APIs on the specified version
    'n/no-unsupported-features/node-builtins': 'error',
    // make `process.exit()` expressions the same code path as `throw`
    'n/process-exit-as-throw': 'error',
    // enforce shebang on the entry bin file
    'n/shebang': 'error',
  },
}
