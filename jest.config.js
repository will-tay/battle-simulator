module.exports = {
  roots: [
    '<rootDir>'
  ],
  testMatch: [
    '<rootDir>/src/__tests__/**/*.test.+(ts|tsx)'
  ],
  setupFiles: [
    '<rootDir>/test-env.js'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  coveragePathIgnorePatterns: [
    'node_modules'
  ],
  setupFilesAfterEnv: ['./jest.setup.ts']
}
