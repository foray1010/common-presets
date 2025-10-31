declare module 'eslint-plugin-compat' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  interface CompatPlugin extends Plugin {
    config: {
      'flat/recommended': ConfigObject<RulesConfig>
      recommended: LegacyConfigObject<RulesConfig, RulesConfig>
    }
    meta: {
      name: string
      version: string
    }
    configs: {
      'flat/recommended': ConfigObject<RulesConfig>
      recommended: LegacyConfigObject<RulesConfig, RulesConfig>
    }
  }

  const plugin: CompatPlugin
  export default plugin
}
