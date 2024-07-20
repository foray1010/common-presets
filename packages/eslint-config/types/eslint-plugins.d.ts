declare module '@eslint-community/eslint-plugin-*' {
  import type { Linter } from 'eslint'

  export const configs: Record<
    string,
    {
      readonly rules: Linter.RulesRecord
    }
  >
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

declare module 'eslint-plugin-react' {
  import type { Linter } from 'eslint'

  export const configs: {
    readonly flat: {
      readonly 'jsx-runtime': {
        readonly rules: Linter.RulesRecord
      }
      readonly recommended: {
        readonly rules: Linter.RulesRecord
      }
    }
  }
}
