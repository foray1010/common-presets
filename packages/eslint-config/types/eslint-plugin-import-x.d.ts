declare module 'eslint-plugin-import-x' {
  import type { ConfigObject, Plugin, RulesConfig } from 'eslint/config'

  interface ImportXPlugin extends Plugin {
    flatConfigs: {
      recommended: ConfigObject<RulesConfig>
      typescript: ConfigObject<RulesConfig>
    }
    configs: Record<string, ConfigObject<RulesConfig>>
  }

  const plugin: ImportXPlugin
  export default plugin
}
