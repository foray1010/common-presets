declare module '@babel/helper-plugin-utils' {
  import type { ConfigAPI, PluginItem } from '@babel/core'

  export const declare: (
    fn: (api: ConfigAPI, options: Record<string, unknown>) => PluginItem,
  ) => PluginItem
}
