'use strict'

module.exports = {
  frail: true,
  plugins: [
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
    'remark-preset-lint-recommended',
    'remark-preset-prettier',
    // compatible with common changelog format
    ['remark-lint-heading-increment', false],
    ['remark-lint-no-duplicate-headings', false],
    ['remark-lint-no-multiple-toplevel-headings', false],
  ],
}
