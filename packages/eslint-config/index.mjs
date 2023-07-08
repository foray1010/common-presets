import baseConfig from './bases/base.mjs'
import browserConfig from './bases/browser.mjs'
import nodeConfig from './bases/node.mjs'
import prettierConfig from './bases/prettier.mjs'
import reactConfig from './bases/react.mjs'

export * from './utils/applyConfig.mjs'

/** @typedef {import('./types/internal.d.ts').EslintConfig} EslintConfig */

/** @type {EslintConfig} */
export const eslintBrowserConfig = [
  ...baseConfig,
  ...browserConfig,
  ...prettierConfig,
]

/** @type {EslintConfig} */
export const eslintNodeConfig = [
  ...baseConfig,
  ...nodeConfig,
  ...prettierConfig,
]

/** @type {EslintConfig} */
export const eslintReactConfig = [
  ...baseConfig,
  ...browserConfig,
  ...reactConfig,
  ...prettierConfig,
]

export { default as eslintIgnoresConfig } from './bases/ignores.mjs'
