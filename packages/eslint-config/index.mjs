import baseConfig from './bases/base.mjs'
import browserConfig from './bases/browser.mjs'
import nodeConfig from './bases/node.mjs'
import prettierConfig from './bases/prettier.mjs'
import reactConfig from './bases/react.mjs'

export * from './utils/applyConfig.mjs'

/** @type {readonly import('eslint').Linter.FlatConfig[]} */
export const eslintBrowserConfig = [
  ...baseConfig,
  ...browserConfig,
  ...prettierConfig,
]

/** @type {readonly import('eslint').Linter.FlatConfig[]} */
export const eslintNodeConfig = [
  ...baseConfig,
  ...nodeConfig,
  ...prettierConfig,
]

/** @type {readonly import('eslint').Linter.FlatConfig[]} */
export const eslintReactConfig = [
  ...baseConfig,
  ...browserConfig,
  ...reactConfig,
  ...prettierConfig,
]

export { default as eslintIgnoresConfig } from './bases/ignores.mjs'
