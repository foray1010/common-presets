declare module '@eslint-community/eslint-plugin-*' {
  import type { Linter } from 'eslint'

  export const configs: Record<
    string,
    {
      readonly rules: Linter.RulesRecord
    }
  >
}

declare module '@eslint/js' {
  import type { Linter } from 'eslint'

  export const configs: {
    readonly recommended: Linter.FlatConfig
  }
}

declare module 'eslint-config-*' {
  import type { Linter } from 'eslint'

  export const rules: Linter.RulesRecord
}

declare module 'eslint-plugin-*' {
  import type { Linter } from 'eslint'

  export const configs: Record<
    string,
    {
      readonly rules: Linter.RulesRecord
    }
  >
}

declare module 'eslint-plugin-prettier' {
  import type { Linter } from 'eslint'

  export const configs: Record<
    string,
    {
      readonly rules: Linter.RulesRecord
    }
  >
}
