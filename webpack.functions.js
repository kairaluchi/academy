const nodeExternals = require('webpack-node-externals')
const DotEnv = require('dotenv-webpack')
// const webpack = require('webpack')

module.exports = {
  externals: [nodeExternals()],
  plugins: [new DotEnv()]
}
