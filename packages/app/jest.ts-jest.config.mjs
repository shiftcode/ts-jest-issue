/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        "^.+\\.(t|j)sx?$": [
            'ts-jest',
            {
                tsconfig: './tsconfig.jest.json',
                useESM: true,
            },
        ],
    },
}
