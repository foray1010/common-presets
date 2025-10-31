declare module 'eslint-plugin-jest-dom' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  interface JestDomPlugin extends Plugin {
    configs: {
      recommended: LegacyConfigObject<RulesConfig, RulesConfig>
      'flat/recommended': ConfigObject<RulesConfig>
    }
  }

  const plugin: JestDomPlugin
  export default plugin
}
