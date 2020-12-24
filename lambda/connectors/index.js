const getSequelize = require('./sequelize')

exports.loadConnectors = (config) => {
  const sequelize = getSequelize(config.db)
  return {
    sequelize
  }
}
