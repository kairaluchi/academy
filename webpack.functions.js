const nodeExternals = require('webpack-node-externals')
const DotEnv = require('dotenv-webpack')

module.exports = {
  externals: [nodeExternals()],
  plugins: [new DotEnv()]
}
