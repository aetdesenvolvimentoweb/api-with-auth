import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.spec.ts",
    "**/__tests__/**/*.test.ts",
    "**/__tests__/**/*.e2e.ts",
  ],
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  testFailureExitCode: 1,
  passWithNoTests: true,
  silent: true,
  verbose: false,
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  moduleNameMapper: {
    "^src$": "<rootDir>/src/$1",
    "^@domain/(.*)$": "<rootDir>/src/domain/$1",
    "^@application/(.*)$": "<rootDir>/src/application/$1",
    "^@presentation/(.*)$": "<rootDir>/src/presentation/$1",
    "^@infra/(.*)$": "<rootDir>/src/infra/$1",
    "^@main/(.*)$": "<rootDir>/src/main/$1",
  },
};

export default config;
