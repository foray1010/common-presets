// eslint-disable-next-line import-x/no-extraneous-dependencies
import { eslintIgnoresConfig, eslintNodeConfig } from '@foray1010/eslint-config'

const config = [...eslintIgnoresConfig, ...eslintNodeConfig]
export default config
