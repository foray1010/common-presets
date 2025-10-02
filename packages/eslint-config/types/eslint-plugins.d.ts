declare module 'eslint-plugin-react-hooks' {
  import type { Linter } from 'eslint'

  const configs: Record<
    string,
    {
      readonly rules: Linter.RulesRecord
    }
  >

  const defaultExport = {
    configs,
  }
  export default defaultExport
}
