const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js', 'jest-localstorage-mock'],
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/lib'
  ],
  collectCoverage: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reporters: ['default', 'jest-junit'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
