import path from 'node:path'

import { supportedFilesGlob } from '../constants.mjs'

/**
 * Extend the flat configs with default files and ignores
 * @param {{
 *   readonly filePrefixes: string[] | undefined,
 *   readonly ignorePrefixes?: string[] | undefined
 * }} options
 * @param {readonly import('eslint').Linter.FlatConfig[]} flatConfigs
 * @returns {readonly import('eslint').Linter.FlatConfig[]}
 */
export function applyConfig(options, flatConfigs) {
  // Do not allow string such as "eslint:recommended" because it cannot be overridden by files/ignores
  for (const config of flatConfigs) {
    if (typeof config === 'string') {
      throw new TypeError(
        `Cannot extend ${config} with files/ignores, use \`@eslint/js\` instead`,
      )
    }

    const keys = Object.keys(config)
    if (keys.length === 1 && keys.includes('ignores')) {
      throw new TypeError('Do not use `ignores` only')
    }
  }

  return flatConfigs.map((config) => {
    const files = generateCombinations(options.filePrefixes, config.files)
    const ignores = generateCombinations(options.ignorePrefixes, config.ignores)
    return {
      ...config,
      ...(files ? { files } : {}),
      ...(ignores ? { ignores } : {}),
    }
  })
}

/**
 * @param {string[] | undefined} prefixes
 * @param {string | string[] | undefined} originalGlobs
 * @returns {string | string[] | undefined}
 */
function generateCombinations(prefixes, originalGlobs) {
  if (!prefixes || prefixes.length === 0) return originalGlobs
  if (!originalGlobs || originalGlobs.length === 0) {
    return prefixes.map((prefix) => path.join(prefix, supportedFilesGlob))
  }

  const originalGlobList = [originalGlobs].flat()

  return prefixes.flatMap((prefix) => {
    return originalGlobList.flatMap((originalGlob) => {
      const signRegexp = /^!/
      const sign = originalGlob.match(signRegexp)?.[0] ?? ''
      return sign + path.join(prefix, originalGlob.replace(signRegexp, ''))
    })
  })
}
