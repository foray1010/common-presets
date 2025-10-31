declare module 'eslint-plugin-regexp' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  interface RegexpPlugin extends Plugin {
    configs: {
      recommended: LegacyConfigObject<RulesConfig, RulesConfig>
      all: LegacyConfigObject<RulesConfig, RulesConfig>
      'flat/all': ConfigObject<RulesConfig>
      'flat/recommended': ConfigObject<RulesConfig>
    }
  }

  const plugin: RegexpPlugin
  export default plugin
}
