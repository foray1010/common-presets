// eslint-disable-next-line import/extensions
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @type {EslintConfig} */
// should be placed at the end to override other configs
const prettierConfig = [
  // This includes `eslint-config-prettier` as peer dependency
  eslintPluginPrettierRecommended,
]
export default prettierConfig
