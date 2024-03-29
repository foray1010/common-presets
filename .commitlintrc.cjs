'use strict'

const fg = require('fast-glob')
const path = require('node:path')

const packageJson = require('./package.json')

const dirPaths = fg.sync(packageJson.workspaces, {
  onlyFiles: false,
  markDirectories: true,
})
const scopes = [
  'deps',
  'release',
  ...dirPaths.map((dirPath) => path.basename(dirPath)),
]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
}
