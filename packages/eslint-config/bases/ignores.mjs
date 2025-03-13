// eslint-disable-next-line import-x/extensions, import-x/no-unresolved
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
