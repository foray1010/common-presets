const preset = {
  plugins: [
    'remark-frontmatter',
    'remark-preset-lint-consistent',
    'remark-preset-lint-markdown-style-guide',
    'remark-preset-lint-recommended',
    'remark-preset-prettier',
    ['remark-lint-no-dead-urls', { skipLocalhost: true, skipOffline: true }],
    // allow `_` on file name
    ['remark-lint-no-file-name-irregular-characters', false],
    // allow title case on file name
    ['remark-lint-no-file-name-mixed-case', false],
  ],
}
export default preset
