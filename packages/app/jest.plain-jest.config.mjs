/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // A path to a custom resolver
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '**/?(*.)+(spec|test).js',
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
}