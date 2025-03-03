import path from 'node:path'

import { glob } from 'tinyglobby'

import packageJson from './package.json' with { type: 'json' }

const dirPaths = await glob(packageJson.workspaces, {
  onlyDirectories: true,
})
const scopes = [
  'deps',
  'release',
  ...dirPaths.map((dirPath) => path.basename(dirPath)),
]

const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopes],
  },
}
export default config
