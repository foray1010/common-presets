'use strict'

const readPkgUp = require('read-pkg-up')

const { packageJson } = readPkgUp.sync()

const hasDep = packageName =>
  [
    packageJson.dependencies,
    packageJson.devDependencies,
    packageJson.peerDependencies,
  ]
    .map(dependencies => Object.keys(dependencies || {}))
    .reduce((acc, dependencyNames) => acc.concat(dependencyNames), [])
    .includes(packageName)

const isESM = () => packageJson.type === 'module'

module.exports = {
  hasDep,
  isESM,
}
