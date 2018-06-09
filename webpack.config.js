var path = require('path');
module.exports = {
    mode: "development",
    entry: './src/index.ts',
    module: {
      rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
      ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js'
    }
};