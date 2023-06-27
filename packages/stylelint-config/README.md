# `@foray1010/stylelint-config`

It aims at providing a general stylelint config for:

1. assisting developer to obtain better code quality

1. no opinion on coding styles, leave it to [@foray1010/prettier-config](../prettier-config)

## Versioning

### X.Y.Z

X for requiring newer stylelint or node (breaking changes)

Y for stricter rules

Z for looser rules

## Installation

1. `yarn add -DE @foray1010/stylelint-config prettier stylelint`

1. Create an `.stylelintrc.mjs` in the project root

   ```js
   const config = {
     extends: ['@foray1010/stylelint-config'],
   }
   export default config
   ```

1. Use default stylelintignore via npm script

   ```json
   {
     "scripts": {
       "stylelint": "stylelint --ignore-path=node_modules/@foray1010/stylelint-config/stylelintignore"
     }
   }
   ```

   then use `npm run stylelint` or `yarn stylelint` to replace `stylelint`
