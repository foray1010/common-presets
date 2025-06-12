// eslint-disable-next-line import-x/extensions
import { defineConfig, globalIgnores } from 'eslint/config'

const ignoresConfig = defineConfig(
  globalIgnores([
    '**/.yarn/**',
    '**/build/**',
    '**/coverage/**',
    '**/dist/**',
    '**/node_modules/**',
  ]),
)
export default ignoresConfig
