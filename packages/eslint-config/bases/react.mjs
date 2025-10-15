// eslint-disable-next-line import-x/extensions
import { defineConfig } from 'eslint/config'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library'

import { testFileGlobs } from '../constants.mjs'

const reactConfig = defineConfig(
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      eslintPluginReact.configs.flat['recommended'],
      eslintPluginReact.configs.flat['jsx-runtime'],
      // @ts-expect-error - package has types but typescript does not recognize it
      eslintPluginReactHooks.configs['recommended-latest'],
      eslintPluginJsxA11y.flatConfigs.recommended,
    ],
    rules: {
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
            /^(useDeepCompareCallback|useDeepCompareEffect|useDeepCompareImperativeHandle|useDeepCompareLayoutEffect|useDeepCompareMemo)$/u
              .source,
        },
      ],
    },
  },
  {
    files: testFileGlobs,
    extends: [eslintPluginTestingLibrary.configs['flat/react']],
    rules: {
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
)
export default reactConfig
