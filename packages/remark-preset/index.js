'use strict'

module.exports = {
  plugins: [
    'remark-frontmatter',
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
    'remark-preset-lint-recommended',
    // when using 'remark-preset-prettier' will throw `Error: Expected preset or plugin, not [object Object]`
    require('remark-preset-prettier'),
    ['remark-lint-no-dead-urls', { skipLocalhost: true, skipOffline: true }],
    // allow `_` on file name
    ['remark-lint-no-file-name-irregular-characters', false],
    // allow title case on file name
    ['remark-lint-no-file-name-mixed-case', false],
    'remark-validate-links',
  ],
}
