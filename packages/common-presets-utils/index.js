'use strict'

const path = require('node:path')
const readPkgUp = require('read-pkg-up')

const { packageJson: pkg, path: pkgPath } = readPkgUp.sync() ?? {}

const pkgDir = pkgPath ? path.dirname(pkgPath) : undefined

/**
 * Check if current application has a package as dependencies/devDependencies/peerDependencies
 *
 * @param {string} packageName package name in registry
 * @returns {boolean} whether current application has this package as dependencies/devDependencies/peerDependencies or not
 */
const hasDep = (packageName) =>
  [pkg?.dependencies, pkg?.devDependencies, pkg?.peerDependencies]
    .flatMap((dependencies) => Object.keys(dependencies ?? {}))
    .includes(packageName)

const isESM = () => pkg?.['type'] === 'module'

module.exports = {
  hasDep,
  isESM,
  pkg,
  pkgDir,
}
