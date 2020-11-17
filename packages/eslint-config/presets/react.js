'use strict'

const { testFileGlobs } = require('./utils/testUtil')

module.exports = {
  extends: ['plugin:react/recommended', 'eslint-config-prettier/react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-config-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-useless-fragment': 'error',
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
    // because we are using automatic react runtime
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        // support package `use-deep-compare`
        additionalHooks:
          '(useDeepCompareCallback|useDeepCompareEffect|useDeepCompareMemo)',
      },
    ],
  },
  overrides: [
    {
      files: testFileGlobs,
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      plugins: ['eslint-plugin-jest-dom', 'eslint-plugin-testing-library'],
      rules: {
        // avoid using unnecessary `await` as workaround for `not wrapped in act(...)` warnings
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-wait-for-empty-callback': 'error',
        // avoid side effects inside `waitFor`
        'testing-library/no-wait-for-snapshot': 'error',
        // explicitly assert the element to prevent reader missed the test cases
        'testing-library/prefer-explicit-assert': 'error',
        // better error message
        'testing-library/prefer-presence-queries': 'error',
        // using `screen` to avoid name collision
        'testing-library/prefer-screen-queries': 'error',
        // as `wait` is deprecated
        'testing-library/prefer-wait-for': 'error',
      },
    },
  ],
}
