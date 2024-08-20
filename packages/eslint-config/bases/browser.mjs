import { hasDep } from '@foray1010/common-presets-utils'
import restrictedGlobals from 'confusing-browser-globals'
import eslintPluginCompat from 'eslint-plugin-compat'
import eslintPluginImportX from 'eslint-plugin-import-x'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'

import { testFileGlobs } from '../constants.mjs'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @returns {Promise<EslintConfig>} */
async function generateJestDomConfig() {
  // `eslint-plugin-jest-dom` depends on `@testing-library/dom` package
  if (!hasDep('@testing-library/dom')) return []

  const eslintPluginJestDom = (await import('eslint-plugin-jest-dom')).default

  return [
    {
      files: testFileGlobs,
      ...eslintPluginJestDom.configs['flat/recommended'],
    },
  ]
}

/** @type {EslintConfig} */
const browserConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.webextensions,
        // keep it until webpack has an official way to define env: https://github.com/webpack/webpack/issues/15833
        process: 'readonly',
      },
    },
    plugins: {
      compat: eslintPluginCompat,
      // @ts-expect-error Type is not compact with flat config
      'import-x': eslintPluginImportX,
    },
    rules: {
      'compat/compat': 'error',
      // frontend environment doesn't support node.js modules
      'import-x/no-nodejs-modules': 'error',
      'no-restricted-globals': ['error', ...restrictedGlobals],
    },
  },
  ...(await generateJestDomConfig()),
  {
    files: testFileGlobs,
    ...eslintPluginTestingLibrary.configs['flat/dom'],
  },
  {
    files: testFileGlobs,
    rules: {
      // allow to use nodejs modules in tests
      'import-x/no-nodejs-modules': 'off',
    },
  },
]
export default browserConfig
