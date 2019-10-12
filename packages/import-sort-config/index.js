'use strict'

module.exports = {
  '.js, .mjs': {
    parser: 'import-sort-parser-babylon',
    style: 'import-sort-style-module',
  },
  '.ts, .tsx': {
    parser: 'import-sort-parser-typescript',
    style: 'import-sort-style-module',
  },
}
