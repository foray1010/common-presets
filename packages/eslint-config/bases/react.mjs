import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'

import { testFileGlobs } from '../constants.mjs'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @type {EslintConfig} */
const reactConfig = [
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs['recommended']?.rules,
      // avoid unexpected form submits
      'react/button-has-type': 'error',
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
      // avoid unexpected react hook dead loops
      'react/no-object-type-as-default-prop': 'error',
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
  },
  {
    files: testFileGlobs,
    plugins: {
      'testing-library': eslintPluginTestingLibrary,
    },
    rules: {
      ...eslintPluginTestingLibrary.configs['react']?.rules,
      // avoid using unnecessary `await` as workaround for `not wrapped in act(...)` warnings
      'testing-library/no-await-sync-events': [
        'error',
        {
          eventModules: ['fire-event'],
        },
      ],
      // explicitly assert the element to prevent reader missed the test cases
      'testing-library/prefer-explicit-assert': 'error',
      // prefer @testing-library/user-event over fireEvent
      'testing-library/prefer-user-event': 'error',
    },
  },
]
export default reactConfig
