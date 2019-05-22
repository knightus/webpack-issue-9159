/* eslint-disable import/no-extraneous-dependencies */
const appRootDir = require('app-root-dir').get();
const { resolve } = require('path');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const BUILD_DIR = resolve(appRootDir, 'build');

const APP_DIR = resolve(appRootDir, 'source');

const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV);

module.exports = {
    mode: ifProduction('production', 'development'),
    context: appRootDir,
    entry: removeEmpty({
        main: './source/scripts/index.js',
    }),
    output: {
        path: BUILD_DIR,
        filename: ifDevelopment('[name].js', '[name].min.js'),
        chunkFilename: '[name].chunk.js',
    },
    performance: {
        hints: ifProduction('warning', false),
    },
    devtool: ifDevelopment('source-map', ''),
    module: {
        rules: removeEmpty([
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]),
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: ['.json', '.js', '.jsx'],
    },
    node: {
        fs: 'empty',
    },
    stats: {
        assets: false,
        cached: false,
        cachedAssets: false,
        colors: true,
        version: false,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: false,
        entrypoints: false,
        modules: false,
    },
};
