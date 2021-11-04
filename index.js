class DeleteSourceMapsWebpackPlugin {
    constructor () {}

    apply (compiler) {
        compiler.hooks.done.tap('DeleteSourceMapsWebpackPlugin', (stats) => {
            try {
                const path = require('path');
                const fs = require('fs');
                const { compilation } = stats;
                const outputPath = compilation.outputOptions.path;
                const sourcemapFileCount = Object
                    .keys(compilation.assets)
                    .filter((filename)=>/[a-zA-Z0-9-]\.(js|css)\.map$/.test(filename))
                    .map((filename)=>{
                        if (!outputPath) {
                            return;
                        }

                        const filePath = path.join(outputPath, filename);

                        fs.unlinkSync(filePath);
                    }).length;

                console.log(`⭐⭐⭐ Deleted ${sourcemapFileCount} source map files ⭐⭐⭐`);
            } catch (exception) {
                console.log(exception);
            }
        })
    }
}

module.exports = DeleteSourceMapsWebpackPlugin;
