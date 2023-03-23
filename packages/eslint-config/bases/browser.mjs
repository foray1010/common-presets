import restrictedGlobals from 'confusing-browser-globals'
import eslintPluginCompat from 'eslint-plugin-compat'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginJestDom from 'eslint-plugin-jest-dom'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'

import { testFileGlobs } from '../constants.mjs'

/** @type {import('eslint').Linter.FlatConfig[]} */
const browserConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        // keep it until webpack has an official way to define env: https://github.com/webpack/webpack/issues/15833
        // @ts-expect-error
        process: 'readonly',
      },
    },
    plugins: {
      compat: eslintPluginCompat,
      import: eslintPluginImport,
    },
    rules: {
      'compat/compat': 'error',
      // frontend environment doesn't support node.js modules
      'import/no-nodejs-modules': 'error',
      'no-restricted-globals': ['error', ...restrictedGlobals],
    },
  },
  {
    files: testFileGlobs,
    plugins: {
      'jest-dom': eslintPluginJestDom,
      'testing-library': eslintPluginTestingLibrary,
    },
    rules: {
      ...eslintPluginJestDom.configs['recommended']?.rules,
      ...eslintPluginTestingLibrary.configs['dom']?.rules,
      // allow to use nodejs modules in tests
      'import/no-nodejs-modules': 'off',
    },
  },
]
export default browserConfig
