module.exports = {
  verbose: true,
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    'app/core/utils/kbn': '<rootDir>/src/__mocks__/kbn.ts',
    'app/plugins/sdk': '<rootDir>/src/__mocks__/sdk.ts',
  },
  "transformIgnorePatterns": [
    "<rootDir>/node_modules/(?!grafana-sdk-mocks)"
  ],
  "testRegex": "(\\.|/)(test)\\.ts$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json"
  ]
};
