/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    extensionsToTreatAsEsm: ['.mts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
        '@lab/commons/helper': '<rootDir>/../commons/dist/helpers/index.mjs',
    },
    // A path to a custom resolver
    // resolver: '<rootDir>/../../mjs-resolver.cjs',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/*.m[jt]s?(x)',
        '**/?(*.)+(spec|test).m[tj]s?(x)',
    ],
    transform: {
        "^.+\\.mts$": [
            'ts-jest',
            {
                tsconfig: './tsconfig.jest.json',
                useESM: true,
            },
        ],
    },
    testPathIgnorePatterns: [
        "/node_modules/",
        "dist"
    ],
    // An array of file extensions your modules use
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
    verbose: true
}