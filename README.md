# delete-sourcemap-webpack-plugin

delete source map files after uploaded to sentry or anywhere

## 安装

```bash
npm i sentry-extra-delete-sourcemap-webpack-plugin -D
```

## 使用

```javascript
// webpack.config.js
const DeleteSourceMapWebpackPlugin = require('sentry-extra-delete-sourcemap-webpack-plugin')

module.exports = {
    // ...
    plugins: [
        new DeleteSourceMapWebpackPlugin()
    ],
    // ...
}
```
