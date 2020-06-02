# `@foray1010/tsconfig`

This config assumes user never use TypeScript as compiler, but use it for type checker and/or type generator.

If you need to compile TypeScript, use [@foray1010/babel-preset](../babel-preset)

## Installation

1. `npm install --save-dev typescript @foray1010/tsconfig`

2. Create an `tsconfig.json` in the project root

   for app:

   ```json
   {
     "extends": "@foray1010/tsconfig",
     "compilerOptions": {
       "emitDeclarationOnly": false,
       "noEmit": true
     }
   }
   ```

   for library:

   ```json
   {
     "extends": "@foray1010/tsconfig",
     "compilerOptions": {
       "declarationDir": "build/dts"
     }
   }
   ```
