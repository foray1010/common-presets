// eslint-disable-next-line import/no-extraneous-dependencies
import {
  applyConfig,
  eslintFilesConfig,
  eslintIgnoresConfig,
  eslintNodeConfig,
  eslintReactConfig,
} from '@foray1010/eslint-config'

const config = [
  ...eslintIgnoresConfig,
  ...eslintFilesConfig,
  ...applyConfig(
    {
      ignorePrefixes: ['**/react'],
    },
    eslintNodeConfig,
  ),
  ...applyConfig(
    {
      filePrefixes: ['**/react'],
    },
    eslintReactConfig,
  ),
]
export default config
