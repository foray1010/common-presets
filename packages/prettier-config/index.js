'use strict'

module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 80,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,

  overrides: [
    {
      files: ['.babelrc'],
      options: {
        parser: 'json',
      },
    },
  ],
}
