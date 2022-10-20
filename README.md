## mts extension with ts-jest

Since `ts4.7`(https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#new-file-extensions) (see [announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#new-file-extensions)) esm is supported.
This repo holds some samples to play around with possible configuration options.

To activate debug log, make sure to execute `export TS_JEST_LOG=ts-jest.log` before running a test script.

To reproduce follow these steps:
```shell
npm install
# ts-jest fails
npm run test:ts-jest --workspace=@lab/app
# swc/jest works
npm run test:swc --workspace=@lab/app
```
