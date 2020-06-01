'use strict'

const path = require('path')
const readPkgUp = require('read-pkg-up')

const { packageJson: pkg, path: pkgPath } = readPkgUp.sync()

const pkgDir = path.dirname(pkgPath)

const hasDep = (packageName) =>
  [pkg.dependencies, pkg.devDependencies, pkg.peerDependencies]
    .map((dependencies) => Object.keys(dependencies || {}))
    .reduce((acc, dependencyNames) => acc.concat(dependencyNames), [])
    .includes(packageName)

const isESM = () => pkg.type === 'module'

module.exports = {
  hasDep,
  isESM,
  pkg,
  pkgDir,
}
