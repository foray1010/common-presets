import { hasDep } from '@foray1010/common-presets-utils'
import restrictedGlobals from 'confusing-browser-globals'
// eslint-disable-next-line import-x/extensions
import { defineConfig } from 'eslint/config'
import eslintPluginCompat from 'eslint-plugin-compat'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'
import globals from 'globals'

import { testFileGlobs } from '../constants.mjs'

async function generateJestDomConfig() {
  // `eslint-plugin-jest-dom` depends on `@testing-library/dom` package
  if (!hasDep('@testing-library/dom')) return defineConfig({})

  const eslintPluginJestDom = (await import('eslint-plugin-jest-dom')).default

  return defineConfig({
    files: testFileGlobs,
    extends: [eslintPluginJestDom.configs['flat/recommended']],
  })
}

const browserConfig = defineConfig(
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
    },
    rules: {
      'compat/compat': 'error',
      // frontend environment doesn't support node.js modules
      'import-x/no-nodejs-modules': 'error',
      'no-restricted-globals': ['error', ...restrictedGlobals],
    },
  },
  await generateJestDomConfig(),
  {
    files: testFileGlobs,
    extends: [eslintPluginTestingLibrary.configs['flat/dom']],
    rules: {
      // allow to use nodejs modules in tests
      'import-x/no-nodejs-modules': 'off',
    },
  },
)
export default browserConfig
