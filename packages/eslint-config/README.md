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

1. `npm install --save-dev eslint @foray1010/eslint-config`

1. Create an `.eslintrc.yml` in the project root

   ```yml
   # for general purpose, support TypeScript
   extends:
     - '@foray1010/eslint-config'

   # for frontend React project, support TypeScript
   extends:
     - '@foray1010/eslint-config/react'
   ```

1. Use default eslintignore via npm script

   ```json
   {
     "scripts": {
       "eslint": "eslint --ext=cjs,js,mjs,ts,tsx --ignore-path=node_modules/@foray1010/eslint-config/eslintignore"
     }
   }
   ```

   then use `npm run eslint` or `yarn eslint` to replace `eslint`
