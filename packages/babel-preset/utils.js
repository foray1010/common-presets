'use strict'

const readPkgUp = require('read-pkg-up')

const { packageJson } = readPkgUp.sync()

const getEnv = () => {
  return process.env.BABEL_ENV || process.env.NODE_ENV || 'development'
}

const hasDep = packageName =>
  [
    packageJson.dependencies,
    packageJson.devDependencies,
    packageJson.peerDependencies,
  ]
    .map(dependencies => Object.keys(dependencies || {}))
    .reduce((acc, dependencyNames) => acc.concat(dependencyNames), [])
    .includes(packageName)

module.exports = {
  getEnv,
  hasDep,
}
