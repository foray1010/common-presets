import { isESM } from '@foray1010/common-presets-utils'
// eslint-disable-next-line import-x/extensions
import { defineConfig } from 'eslint/config'
import eslintPluginN from 'eslint-plugin-n'

const cjsConfig = defineConfig({
  languageOptions: {
    globals: {
      __dirname: 'readonly',
      __filename: 'readonly',
    },
  },
})

const nodeConfig = defineConfig(
  {
    plugins: {
      n: eslintPluginN,
    },
    languageOptions: {
      globals: {
        // hack to mute no-undef error, and show n/prefer-global/buffer error instead
        Buffer: 'readonly',
        // hack to mute no-undef error, and show n/prefer-global/process error instead
        process: 'readonly',
      },
    },
    rules: {
      // disallow deprecated node APIs
      'n/no-deprecated-api': 'error',
      // disallow the assignment to `exports`
      'n/no-exports-assign': 'error',
      // use process.exitCode instead
      'n/no-process-exit': 'error',
      // disallow `bin` files that npm ignores
      'n/no-unpublished-bin': 'error',
      // disallow unsupported Node.js built-in APIs on the specified version
      'n/no-unsupported-features/node-builtins': 'error',
      // prefer `import { Buffer } from 'node:buffer'` as it is not isomorphic
      'n/prefer-global/buffer': ['error', 'never'],
      // prefer global `console` to be isomorphic
      'n/prefer-global/console': ['error', 'always'],
      // prefer `import process from 'node:process'` as it is not isomorphic
      'n/prefer-global/process': ['error', 'never'],
      // prefer global `TextDecoder` to be isomorphic
      'n/prefer-global/text-decoder': ['error', 'always'],
      // prefer global `TextEncoder` to be isomorphic
      'n/prefer-global/text-encoder': ['error', 'always'],
      // prefer global `URL` to be isomorphic
      'n/prefer-global/url': ['error', 'always'],
      // prefer global `URLSearchParams` to be isomorphic
      'n/prefer-global/url-search-params': ['error', 'always'],
      // prefer `import { promises as dns } from 'node:dns'`
      'n/prefer-promises/dns': 'error',
      // prefer `import { promises as fs } from 'node:fs'`
      'n/prefer-promises/fs': 'error',
      // make `process.exit()` expressions the same code path as `throw`
      'n/process-exit-as-throw': 'error',
      // enforce shebang on the entry bin file
      'n/shebang': 'error',
    },
  },
  ...(isESM()
    ? []
    : [
        {
          files: ['**/*.js'],
          extends: [cjsConfig],
        },
      ]),
  {
    files: ['**/*.{cjs,cts}'],
    extends: [cjsConfig],
  },
)
export default nodeConfig
