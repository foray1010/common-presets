/** @type {import('jest').Config} */
const preset = {
  bail: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{cjs,cts,js,mjs,mts,ts,tsx}'],
  coveragePathIgnorePatterns: ['/__fixtures__/', '/__mocks__/', '/__tests__/'],
  coverageReporters: ['lcov', 'text-summary'],
  errorOnDeprecated: true,
  notify: true,
  testMatch: ['**/*.{spec,test}.{cjs,cts,js,mjs,mts,ts,tsx}'],
}
export default preset
