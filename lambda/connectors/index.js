const getSequelize = require('./sequelize')

exports.loadConnectors = (config) => {
  const sequelize = getSequelize(config.connectionString)
  return {
    sequelize
  }
}
