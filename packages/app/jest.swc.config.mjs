/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'cts',
        'mts',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    // A path to a custom resolver
    // resolver: '<rootDir>/../../mjs-resolver.cjs',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/src/__tests__/**/*.ts',
        '**/src/?(*.)+(spec|test).ts',
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        "^.+\\.ts$": ["@swc/jest"],
    },
}