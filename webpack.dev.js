const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.ts'
    },
    plugins: [
        new webpack.ProvidePlugin({
            PIXI: 'pixi.js'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/, loader: "ts-loader", exclude: [path.join(__dirname, '/node_modules/')], options: {
                    configFile: 'tsconfig.dev.json'
                }
            }
        ]
    }
};