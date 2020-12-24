const { Sequelize, Model, DataTypes } = require('sequelize')
const pg = require('pg')

module.exports = (config) => {
  const sequelize = new Sequelize(config.database, config.username, config.password, { ...config, dialectModule: pg })
  return {
    sequelize,
    Sequelize,
    Model,
    DataTypes
  }
}
