declare module 'eslint-plugin-jsx-a11y' {
  import type { ConfigObject, RulesConfig } from 'eslint/config'

  export interface FlatConfigs {
    recommended: ConfigObject<RulesConfig>
    strict: ConfigObject<RulesConfig>
  }

  export interface JsxA11yPlugin {
    flatConfigs: FlatConfigs
  }

  const plugin: JsxA11yPlugin
  export default plugin
}
