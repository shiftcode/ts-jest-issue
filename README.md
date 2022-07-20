## mts extension with ts-jest

Since `ts4.7`(https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#new-file-extensions) (see [announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#new-file-extensions)) a new
file extension `.mts` is supported. I would like to use this, but it seems like `ts-jest` has no support for it yet.

To reproduce follow these steps:
```shell
npm install
npm run test
```
