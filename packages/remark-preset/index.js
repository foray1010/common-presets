'use strict'

module.exports = {
  plugins: [
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
    'remark-preset-lint-recommended',
    'remark-preset-prettier',
    // allow `_` on file name
    ['remark-lint-no-file-name-irregular-characters', false],
  ],
}
