/** @type {import('jest').Config} */
const preset = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{cjs,cts,js,mjs,mts,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/\\.', // ignore all hidden files
    '/__fixtures__/',
    '/__mocks__/',
    '/__tests__/',
    '/node_modules/',
  ],
  coverageReporters: ['lcov', 'text-summary'],
  errorOnDeprecated: true,
  notify: true,
  resolver: 'ts-jest-resolver',
  testMatch: ['**/*.{spec,test}.{cjs,cts,js,mjs,mts,ts,tsx}'],
}
export default preset
