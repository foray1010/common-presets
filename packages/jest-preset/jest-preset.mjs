/** @type {import('jest').Config} */
const preset = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{cjs,cts,js,mjs,mts,ts,tsx}'],
  coveragePathIgnorePatterns: [
    /\/\./.source, // ignore all hidden files
    /\/__fixtures__\//.source,
    /\/__mocks__\//.source,
    /\/__tests__\//.source,
    /\/node_modules\//.source,
  ],
  coverageReporters: ['lcov', 'text-summary'],
  errorOnDeprecated: true,
  notify: true,
  resolver: 'ts-jest-resolver',
  testMatch: ['**/*.{spec,test}.{cjs,cts,js,mjs,mts,ts,tsx}'],
}
export default preset
