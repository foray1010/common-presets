'use strict'

const { testFileGlobs } = require('./utils/testUtil.js')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    // included eslint-config-prettier
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-no-useless-fragment': [
      'error',
      {
        // allow unnecessary fragment for single expression to bypass some typescript errors (e.g. do not allow string and only allow react element)
        allowExpressions: true,
      },
    ],
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
    // rely on typescript instead, and it does not work well with types that are imported from elsewhere
    'react/prop-types': 'off',
    // avoid unnecessary closing tags
    'react/self-closing-comp': 'error',
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
        'testing-library/no-await-sync-events': [
          'error',
          {
            eventModules: ['fire-event'],
          },
        ],
        // global flag /g holds state and might cause false-positives while querying for elements
        'testing-library/no-global-regexp-flag-in-query': 'error',
        // explicitly assert the element to prevent reader missed the test cases
        'testing-library/prefer-explicit-assert': 'error',
        // prefer @testing-library/user-event over fireEvent
        'testing-library/prefer-user-event': 'error',
        // as `wait` is deprecated
        'testing-library/prefer-wait-for': 'error',
      },
    },
  ],
}
