declare module 'eslint-plugin-react-hooks' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  interface ReactHooksConfigs {
    recommended: LegacyConfigObject<RulesConfig, RulesConfig>
    'recommended-latest': LegacyConfigObject<RulesConfig, RulesConfig>
    flat: {
      recommended: ConfigObject<RulesConfig>
      'recommended-latest': ConfigObject<RulesConfig>
    }
  }

  interface ReactHooksPlugin extends Plugin {
    meta: {
      name: string
      version: string
    }
    configs: ReactHooksConfigs
  }

  const plugin: ReactHooksPlugin
  export default plugin
}
