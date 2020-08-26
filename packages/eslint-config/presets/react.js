'use strict'

const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  extends: [
    'plugin:jest-dom/recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'eslint-config-prettier/react',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-jest-dom',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'eslint-plugin-testing-library',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'react/jsx-sort-props': [
      'error',
      {
        // any prop starts with `on`
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        // support package `use-deep-compare`
        additionalHooks:
          '(useDeepCompareCallback|useDeepCompareEffect|useDeepCompareMemo)',
      },
    ],
    // explicitly assert the element to prevent reader missed the test cases
    'testing-library/prefer-explicit-assert': 'error',
    // better error message
    'testing-library/prefer-presence-queries': 'error',
    // using `screen` to avoid name collision
    'testing-library/prefer-screen-queries': 'error',
    // as `wait` is deprecated
    'testing-library/prefer-wait-for': 'error',
  },
}
