'use strict'

module.exports = {
  plugins: ['eslint-plugin-node'],
  env: {
    node: true,
  },
  rules: {
    // disallow deprecated node APIs
    'node/no-deprecated-api': 'error',
    // make `process.exit()` expressions the same code path as `throw`
    'node/process-exit-as-throw': 'error',
    // enforce shebang on the entry bin file
    'node/shebang': 'error',
  },
}
