/** @type {import('prettier').Options} */
const markdownOptions = {
  // Many markdown parsers does not support using 2 spaces for indentation. Prettier will use 3 spaces for indentation if tabWidth is 2.
  tabWidth: 4,
}

/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-packagejson'],

  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
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
      files: ['*.md'],
      options: markdownOptions,
    },
  ],
}
export default config
