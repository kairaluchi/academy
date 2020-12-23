const nodeExternals = require('webpack-node-externals');
const DotEnv = require('dotenv-webpack')
// const webpack = require('webpack')

module.exports = {
    externals: [nodeExternals()],
    plugins: [new DotEnv()],
    // resolve: {
    //     alias: {
    //         pg: path.resolve(__dirname, "empty_module"),
    //         sqlite3: path.resolve(__dirname, "empty_module"),
    //         "pg-hstore": path.resolve(__dirname, "empty_module"),
    //         tedious: path.resolve(__dirname, "empty_module"),
    //     },
    // }
};
