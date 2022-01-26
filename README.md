

# NxNodeDemo

This project demonstrates a problem with `graphql-helix` and the `@nrwl/node` build/execution environment.

## Project Setup

In the project directory, run:

`npm install`

`npx nx serve api`

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
