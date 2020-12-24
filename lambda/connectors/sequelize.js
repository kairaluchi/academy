const { Sequelize, Model, DataTypes } = require('sequelize')
const pg = require('pg')

module.exports = (config) => {
  config.dialectModule = pg
  console.log('CONFIG', JSON.stringify(config, null, 2))
  const sequelize = new Sequelize(config.database, config.username, config.password, config)
  return {
    sequelize,
    Sequelize,
    Model,
    DataTypes
  }
}
