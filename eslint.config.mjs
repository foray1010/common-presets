// eslint-disable-next-line import/no-extraneous-dependencies
import {
  eslintFilesConfig,
  eslintIgnoresConfig,
  eslintNodeConfig,
} from '@foray1010/eslint-config'

const config = [
  ...eslintIgnoresConfig,
  ...eslintFilesConfig,
  ...eslintNodeConfig,
]
export default config
