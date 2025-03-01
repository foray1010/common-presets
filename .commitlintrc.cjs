'use strict'

const path = require('node:path')
const { globSync } = require('tinyglobby')

const packageJson = require('./package.json')

const dirPaths = globSync(packageJson.workspaces, {
  onlyDirectories: true,
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
