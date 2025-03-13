// eslint-disable-next-line import-x/extensions, import-x/no-unresolved
import { defineConfig } from 'eslint/config'

import baseConfig from './bases/base.mjs'
import browserConfig from './bases/browser.mjs'
import nodeConfig from './bases/node.mjs'
import prettierConfig from './bases/prettier.mjs'
import reactConfig from './bases/react.mjs'

export const eslintBrowserConfig = defineConfig(
  baseConfig,
  browserConfig,
  prettierConfig,
)

export const eslintNodeConfig = defineConfig(
  baseConfig,
  nodeConfig,
  prettierConfig,
)

export const eslintReactConfig = defineConfig(
  baseConfig,
  browserConfig,
  reactConfig,
  prettierConfig,
)

export { default as eslintIgnoresConfig } from './bases/ignores.mjs'
