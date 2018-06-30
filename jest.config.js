module.exports = {
  globals: {
    __TS_CONFIG__: 'tsconfig.json',
  },
  // setupTestFrameworkScriptFile: "./src/test/setup.ts",
  transform: {
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testEnvironment: 'node',
  testRegex: 'tests.*.(ts|tsx|js)$',
  testPathIgnorePatterns: ['node_modules', 'lib', 'dist'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '^storage-cache(.*)$': '<rootDir>/src$1',
  },
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['/node_modules/', '__mockData__'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
}
