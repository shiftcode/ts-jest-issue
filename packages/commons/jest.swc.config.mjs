/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
export default {
    extensionsToTreatAsEsm: ['.mts'],
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
        '**/__tests__/**/*.m[jt]s?(x)',
        '**/?(*.)+(spec|test).m[tj]s?(x)',
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.mjs$': '$1',
    },
    transform: {
        "^.+\\.m(t|j)sx?$": ["@swc/jest"],
    },
}