# Sentry Delete Sourcemaps Webpack Plugin

Delete source map files after upload to Sentry.

## Installation

```bash
npm i sentry-delete-sourcemaps-webpack-plugin -D
```

## Configuration

```javascript
// webpack.config.js
const DeleteSourceMapsWebpackPlugin = require('sentry-delete-sourcemaps-webpack-plugin')

module.exports = {
    // ...
    plugins: [
        new DeleteSourceMapsWebpackPlugin()
    ],
    // ...
}
```
