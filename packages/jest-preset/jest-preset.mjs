/** @type {import('jest').Config} */
const preset = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{cjs,cts,js,mjs,mts,ts,tsx}'],
  coveragePathIgnorePatterns: [
    /\/\./u.source, // ignore all hidden files
    /\/__fixtures__\//u.source,
    /\/__mocks__\//u.source,
    /\/__tests__\//u.source,
    /\/node_modules\//u.source,
    /\.d\.(?:cts|mts|ts|tsx)$/u.source, // ignore type definition files
  ],
  coverageReporters: ['lcov', 'text-summary'],
  errorOnDeprecated: true,
  notify: true,
  resolver: 'ts-jest-resolver',
  testMatch: ['**/*.{spec,test}.{cjs,cts,js,mjs,mts,ts,tsx}'],
}
export default preset
