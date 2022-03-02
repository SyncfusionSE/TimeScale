const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, '/index.ts'),
    output: {
        filename: 'index.js',
        path: __dirname
    },
    devtool: false,
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin(
            {parallel: true,}
        )],
        usedExports: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
};