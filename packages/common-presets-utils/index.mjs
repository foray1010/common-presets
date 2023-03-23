import path from 'node:path'

import { readPackageUpSync } from 'read-pkg-up'

const { packageJson: pkg, path: pkgPath } = readPackageUpSync() ?? {}

export { pkg }

export const pkgDir = pkgPath ? path.dirname(pkgPath) : undefined

/**
 * Check if current application has a package as dependencies/devDependencies/peerDependencies
 *
 * @param {string} packageName package name in registry
 * @returns {boolean} whether current application has this package as dependencies/devDependencies/peerDependencies or not
 */
export const hasDep = (packageName) =>
  [pkg?.dependencies, pkg?.devDependencies, pkg?.peerDependencies]
    .flatMap((dependencies) => Object.keys(dependencies ?? {}))
    .includes(packageName)

export const isESM = () => pkg?.['type'] === 'module'
