

# NxNodeDemo

This project demonstrates a problem with `graphql-helix` and the `@nrwl/node` build/execution environment.

## Project Setup

In the project directory, run:

`npm install`

`npx nx serve`

The following error is expected:

```
Error: Cannot find module '<path>\nx-node-demo\node_modules\graphql-helix\dist\dist.js'
    at createEsmNotFoundErr (internal/modules/cjs/loader.js:912:15)
    at finalizeEsmResolution (internal/modules/cjs/loader.js:905:15)
    at resolveExports (internal/modules/cjs/loader.js:437:14)
    at Function.Module._findPath (internal/modules/cjs/loader.js:477:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:872:27)
    at Function.Module._load (internal/modules/cjs/loader.js:730:27)
    at Module.require (internal/modules/cjs/loader.js:957:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.graphql-helix/dist (<path>\nx-node-demo\dist\apps\api\webpack:\nx-node-demo\external commonjs "graphql-helix\dist":1:1)
    at __webpack_require__ (<path>\Projects\nx-node-demo\dist\apps\api\webpack:\nx-node-demo\webpack\bootstrap:19:1)
```

This error was discovered in `@nrwl/node` versions 13+.  The primary difference in version 13 and version 12 appears to be the use of Webpack v5+ in version 13, and Webpack v4 in version 12.

From `package-lock.json`:
```json
"@nrwl/node": {
      "version": "13.5.3",
      "resolved": "https://registry.npmjs.org/@nrwl/node/-/node-13.5.3.tgz",
      "integrity": "sha512-F+lXEUlBEQlPGKucc+6M+QqDqMjU7BUlyau4DIGpDDOgCDwGqAgfknsauqPyixIrNO41qMJUED2ONV7KczgRtg==",
      "dev": true,
      "requires": {
        <content>
        "ts-loader": "^9.2.6",
        "ts-node": "~9.1.1",
        "tsconfig-paths": "^3.9.0",
        "tsconfig-paths-webpack-plugin": "3.4.1",
        "tslib": "^2.3.0",
        "webpack": "^5.58.1",
        "webpack-merge": "^5.8.0",
        "webpack-node-externals": "^3.0.0"
      }
```
