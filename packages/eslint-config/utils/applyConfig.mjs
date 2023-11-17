import path from 'node:path'

import { supportedFilesGlob } from '../constants.mjs'

/** @typedef {import('../types/internal.d.ts').EslintConfig} EslintConfig */

/**
 * Extend the flat configs with default files and ignores
 * @param {{
 *   readonly filePrefixes: string | string[],
 *   readonly ignores?: string[] | undefined
 * }} options
 * @param {EslintConfig} eslintConfig
 * @returns {EslintConfig}
 */
export function applyConfig(options, eslintConfig) {
  const filePrefixes = [options.filePrefixes].flat()
  if (filePrefixes.length === 0) {
    throw new TypeError('filePrefixes must not be empty')
  }

  // Do not allow string such as "eslint:recommended" because it cannot be overridden by files/ignores
  for (const config of eslintConfig) {
    if (typeof config === 'string') {
      throw new TypeError(
        `Cannot extend ${config} with files/ignores, use \`@eslint/js\` instead`,
      )
    }

    if (Object.keys(config).includes('ignores')) {
      throw new TypeError('Do not use `ignores` in config')
    }
  }

  return eslintConfig.map((config) => {
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
 * @param {EslintConfig[number]['files']} originalGlobs
 * @returns {string[] | undefined}
 */
function generateCombinations(prefixes, originalGlobs) {
  if (!originalGlobs || originalGlobs.length === 0) {
    return prefixes.map((prefix) => path.join(prefix, supportedFilesGlob))
  }

  const verifiedOriginalGlobs = originalGlobs.filter(
    /** @returns {originalGlob is string} */
    (originalGlob) => typeof originalGlob === 'string',
  )
  if (originalGlobs.length !== verifiedOriginalGlobs.length) {
    throw new TypeError(
      `Do not support using non-string value in files/ignores`,
    )
  }

  return prefixes.flatMap((prefix) => {
    return verifiedOriginalGlobs.flatMap((originalGlob) => {
      const signRegexp = /^!/u
      const sign = originalGlob.match(signRegexp)?.[0] ?? ''
      return sign + path.join(prefix, originalGlob.replace(signRegexp, ''))
    })
  })
}
