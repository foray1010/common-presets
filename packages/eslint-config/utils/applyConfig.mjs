import path from 'node:path'

import { supportedFilesGlob } from '../constants.mjs'

/**
 * Extend the flat configs with default files and ignores
 * @param {{
 *   readonly filePrefixes: string | string[],
 *   readonly ignores?: string | string[] | undefined
 * }} options
 * @param {readonly import('eslint').Linter.FlatConfig[]} flatConfigs
 * @returns {readonly import('eslint').Linter.FlatConfig[]}
 */
export function applyConfig(options, flatConfigs) {
  const filePrefixes = [options.filePrefixes].flat()
  if (filePrefixes.length === 0) {
    throw new TypeError('filePrefixes must not be empty')
  }

  // Do not allow string such as "eslint:recommended" because it cannot be overridden by files/ignores
  for (const config of flatConfigs) {
    if (typeof config === 'string') {
      throw new TypeError(
        `Cannot extend ${config} with files/ignores, use \`@eslint/js\` instead`,
      )
    }

    if (Object.keys(config).includes('ignores')) {
      throw new TypeError('Do not use `ignores` in config')
    }
  }

  return flatConfigs.map((config) => {
    const files = generateCombinations(filePrefixes, config.files)
    return {
      ...config,
      ...(files ? { files } : {}),
      ...(options.ignores ? { ignores: options.ignores } : {}),
    }
  })
}

/**
 * @param {string[]} prefixes
 * @param {string | string[] | undefined} originalGlobs
 * @returns {string | string[] | undefined}
 */
function generateCombinations(prefixes, originalGlobs) {
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
