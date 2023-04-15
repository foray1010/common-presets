declare module '@babel/helper-plugin-utils' {
  import type { ConfigAPI, PluginItem } from '@babel/core'

  export const declare: (
    fn: (
      api: Readonly<ConfigAPI>,
      options: Record<string, unknown>,
    ) => Readonly<PluginItem>,
  ) => Readonly<PluginItem>
}
