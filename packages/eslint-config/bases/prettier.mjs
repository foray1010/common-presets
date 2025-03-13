// eslint-disable-next-line import-x/extensions, import-x/no-unresolved
import { defineConfig } from 'eslint/config'
// eslint-disable-next-line import-x/extensions
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

// should be placed at the end to override other configs
const prettierConfig = defineConfig(
  // This includes `eslint-config-prettier` as peer dependency
  eslintPluginPrettierRecommended,
)
export default prettierConfig
