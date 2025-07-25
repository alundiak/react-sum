module.exports = {
  "setupFilesAfterEnv": [
    "<rootDir>/specs/setupTests.js"
  ],
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  "testMatch": [
    "**/*.steps.js"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx"
  ]
}