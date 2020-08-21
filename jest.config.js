const path = require("path");

module.exports = {
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**"
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js"
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  moduleNameMapper: {
    "^@lib/(.*)": "<rootDir>/src/lib/$1",
    "@ui": path.resolve(__dirname, "src", "ui"),
    "^@features/(.*)": "<rootDir>/src/features/$1",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    ".next",
    ".storybook",
    "public",
    ".stories",
    ".knobs"
  ]
};
