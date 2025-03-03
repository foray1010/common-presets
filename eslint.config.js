// eslint-disable-next-line import-x/no-extraneous-dependencies
import { eslintIgnoresConfig, eslintNodeConfig } from '@foray1010/eslint-config'

const config = [
  ...eslintIgnoresConfig,
  ...eslintNodeConfig,
  {
    files: ['.commitlintrc.mjs'],
    languageOptions: {
      ecmaVersion: 2025, // To support import attributes
    },
  },
]
export default config
