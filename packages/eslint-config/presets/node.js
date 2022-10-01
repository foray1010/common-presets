'use strict'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['eslint-plugin-n'],
  globals: {
    // used in commonjs and typescript
    __dirname: 'readonly',
    // used in commonjs and typescript
    __filename: 'readonly',
    // hack to mute no-undef error, and show n/prefer-global/buffer error instead
    Buffer: 'readonly',
    // hack to mute no-undef error, and show n/prefer-global/process error instead
    process: 'readonly',
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
    // prefer `import { Buffer } from 'node:buffer'`
    'n/prefer-global/buffer': ['error', 'never'],
    // prefer `import process from 'node:process'`
    'n/prefer-global/process': ['error', 'never'],
    // make `process.exit()` expressions the same code path as `throw`
    'n/process-exit-as-throw': 'error',
    // enforce shebang on the entry bin file
    'n/shebang': 'error',
  },
}
