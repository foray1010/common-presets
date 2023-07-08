import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/** @type {EslintConfig} */
const prettierConfig = [
  // should be placed at the end to override other configs
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...eslintPluginPrettier.configs['recommended']?.rules,
    },
  },
]
export default prettierConfig
