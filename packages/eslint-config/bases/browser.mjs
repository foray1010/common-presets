// @ts-expect-error
import { hasDep } from '@foray1010/common-presets-utils'
import restrictedGlobals from 'confusing-browser-globals'
import eslintPluginCompat from 'eslint-plugin-compat'
import eslintPluginImport from 'eslint-plugin-import'
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
      plugins: {
        'jest-dom': eslintPluginJestDom,
      },
      rules: {
        ...eslintPluginJestDom.configs['recommended']?.rules,
      },
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
      import: eslintPluginImport,
    },
    rules: {
      'compat/compat': 'error',
      // frontend environment doesn't support node.js modules
      'import/no-nodejs-modules': 'error',
      'no-restricted-globals': ['error', ...restrictedGlobals],
    },
  },
  ...(await generateJestDomConfig()),
  {
    files: testFileGlobs,
    plugins: {
      'testing-library': eslintPluginTestingLibrary,
    },
    rules: {
      ...eslintPluginTestingLibrary.configs['dom']?.rules,
      // allow to use nodejs modules in tests
      'import/no-nodejs-modules': 'off',
    },
  },
]
export default browserConfig
