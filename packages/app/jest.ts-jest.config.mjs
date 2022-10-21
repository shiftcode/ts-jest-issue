/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
        // this did not help
        // '^@lab/commons/helpers':'../commons/dist/helpers/index.js'
    },
    extensionsToTreatAsEsm: ['.ts'],
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/__tests__/**/*.ts',
        '**/?(*.)+(spec|test).ts',
    ],
    transform: {
        "^.+\\.ts": [
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
    ]
}