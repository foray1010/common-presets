# `@foray1010/tsconfig`

This config assumes user never use TypeScript as compiler, but use it for type checker and/or type generator.

If you need to compile TypeScript, use [@foray1010/babel-preset](../babel-preset)

## Installation

1. `npm install --save-dev typescript @foray1010/tsconfig`

2. Create an `tsconfig.json` in the project root

   for app (type checking only):

   ```json
   {
     "extends": "@foray1010/tsconfig"
   }
   ```

   for library (type checking and generate typings):

   ```json
   {
     "extends": "@foray1010/tsconfig",
     "compilerOptions": {
       "declarationDir": "build/dts",
       "emitDeclarationOnly": true,
       "noEmit": false
     }
   }
   ```
