import type { Linter } from 'eslint'

export type EslintConfig = readonly Readonly<Linter.FlatConfig>[]
