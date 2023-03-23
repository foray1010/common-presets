import eslintConfigPrettier from 'eslint-config-prettier'
// eslint-disable-next-line import/namespace, import/no-named-as-default, import/no-named-as-default-member
import eslintPluginPrettier from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
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
