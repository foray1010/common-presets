# `@foray1010/eslint-config`

It aims at providing a general eslint config for:

1. assisting developer to obtain better code quality

1. no opinion on coding styles, leave it to [@foray1010/prettier-config](../prettier-config)

## Versioning

### X.Y.Z

X for requiring newer eslint or node (breaking changes)

Y for stricter rules

Z for looser rules

## Installation

1. `yarn add -DE @foray1010/eslint-config eslint prettier`

1. Create an `.eslintrc.cjs` in the project root

   For general purpose, support TypeScript

   ```js
   'use strict'

   module.exports = {
     root: true,
     extends: ['@foray1010/eslint-config'],
   }
   ```

   For frontend React projects, support TypeScript

   ```js
   'use strict'

   module.exports = {
     root: true,
     extends: ['@foray1010/eslint-config/react'],
   }
   ```

   For TS projects in monorepo, mark the `tsconfigRootDir` to use the correct `tsconfig.json`

   ```js
   'use strict'

   module.exports = {
     root: true,
     extends: ['@foray1010/eslint-config'],
     parserOptions: {
       // Make sure the correct `tsconfig.json` is found in monorepo
       tsconfigRootDir: __dirname,
     },
   }
   ```

1. Use default eslintignore via npm script

   ```json
   {
     "scripts": {
       "eslint": "eslint --ext=cjs,cts,js,mjs,mts,ts,tsx --ignore-path=node_modules/@foray1010/eslint-config/eslintignore"
     }
   }
   ```

   then use `npm run eslint` or `yarn eslint` to replace `eslint`
