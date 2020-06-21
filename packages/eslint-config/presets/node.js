'use strict'

module.exports = {
  plugins: ['eslint-plugin-node'],
  env: {
    node: true,
  },
  rules: {
    // disallow deprecated node APIs
    'node/no-deprecated-api': 'error',
    // disallow the assignment to `exports`
    'node/no-exports-assign': 'error',
    // disallow `bin` files that npm ignores
    'node/no-unpublished-bin': 'error',
    // disallow unsupported Node.js built-in APIs on the specified version
    'node/no-unsupported-features/node-builtins': 'error',
    // make `process.exit()` expressions the same code path as `throw`
    'node/process-exit-as-throw': 'error',
    // enforce shebang on the entry bin file
    'node/shebang': 'error',
  },
}
