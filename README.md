## mts extension with ts-jest

Since `ts4.7` (see [announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#ecmascript-module-support-in-node-js)) typescript has official support
for `ESM`.
When trying to use it with `ts-jest` I am running into issues when using module imports using the new `exports` field ().

To reproduce follow these steps:
```shell
npm i
npm run test:ts-jest
```
