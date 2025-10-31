declare module 'eslint-plugin-n' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  type Configs = {
    'recommended-module': LegacyConfigObject<RulesConfig, RulesConfig>
    'recommended-script': LegacyConfigObject<RulesConfig, RulesConfig>
    recommended: LegacyConfigObject<RulesConfig, RulesConfig>
    'flat/recommended-module': ConfigObject<RulesConfig>
    'flat/recommended-script': ConfigObject<RulesConfig>
    'flat/recommended': ConfigObject<RulesConfig>
    'flat/mixed-esm-and-cjs': ConfigObject<RulesConfig>[]
    'flat/all': ConfigObject<RulesConfig>
  }

  interface PluginN extends Plugin {
    configs: Configs
  }

  const plugin: PluginN
  export default plugin
}
