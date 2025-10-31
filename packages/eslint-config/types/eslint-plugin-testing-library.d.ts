declare module 'eslint-plugin-testing-library' {
  import type {
    ConfigObject,
    LegacyConfigObject,
    Plugin,
    RulesConfig,
  } from 'eslint/config'

  interface TestingLibraryConfigs {
    angular: LegacyConfigObject<RulesConfig, RulesConfig>
    dom: LegacyConfigObject<RulesConfig, RulesConfig>
    marko: LegacyConfigObject<RulesConfig, RulesConfig>
    react: LegacyConfigObject<RulesConfig, RulesConfig>
    svelte: LegacyConfigObject<RulesConfig, RulesConfig>
    vue: LegacyConfigObject<RulesConfig, RulesConfig>
    'flat/angular': ConfigObject<RulesConfig>
    'flat/dom': ConfigObject<RulesConfig>
    'flat/marko': ConfigObject<RulesConfig>
    'flat/react': ConfigObject<RulesConfig>
    'flat/svelte': ConfigObject<RulesConfig>
    'flat/vue': ConfigObject<RulesConfig>
  }

  interface TestingLibraryPlugin extends Plugin {
    meta: {
      name: string
      version: string
    }
    configs: TestingLibraryConfigs
  }

  const plugin: TestingLibraryPlugin
  export default plugin
}
