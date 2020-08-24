# `@foray1010/remark-preset`

## Installation

1. `yarn add -DE remark-cli @foray1010/remark-preset`

1. Create an `.remarkrc.yml` in the project root

   ```yml
   plugins:
     - '@foray1010/remark-preset'
   ```

1. Use default remarkignore via npm script

   ```json
   {
     "scripts": {
       "remark": "remark --ignore-path=node_modules/@foray1010/remark-preset/remarkignore --ignore-path-resolve-from=cwd"
     }
   }
   ```

   then use `npm run remark` or `yarn remark` to replace `remark`
