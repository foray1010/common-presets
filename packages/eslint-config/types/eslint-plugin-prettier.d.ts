declare module 'eslint-plugin-prettier/recommended' {
  import type { ConfigObject, RulesConfig } from 'eslint/config'

  const config: ConfigObject<RulesConfig>
  export default config
}
