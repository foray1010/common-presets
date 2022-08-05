# `@foray1010/babel-preset`

## Installation

1. Install peer dependencies

   for app (type checking only):

   ```sh
   yarn add -E @babel/runtime core-js
   ```

   for library (type checking and generate typings):

   ```sh
   yarn add @babel/runtime
   ```

2. `yarn add -DE @babel/core @foray1010/babel-preset`

3. Create an `.babelrc.cjs` in the project root

   ```js
   'use strict'

   module.exports = {
     presets: ['@foray1010/babel-preset'],
   }
   ```
