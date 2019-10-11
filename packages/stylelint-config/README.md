# `@foray1010/stylelint-config`

It aims at providing a general stylelint config for:

1. assisting developer to obtain better code quality

1. no option on coding styles, leave it to [prettier](https://github.com/prettier/prettier)

## Versioning

### X.Y.Z

X for requiring newer stylelint or node (breaking changes)

Y for stricter rules

Z for looser rules

## Installation

1. `npm install --save-dev stylelint @foray1010/stylelint-config`

1. Create an `.stylelintrc.yml` in the project root

   ```yml
   extends:
     - '@foray1010/stylelint-config'
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
