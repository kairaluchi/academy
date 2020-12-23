const { Sequelize, Model, DataTypes } = require('sequelize')
const pg = require('pg');

module.exports = (uri) => {
    const sequelize = new Sequelize(uri, { dialectModule: pg })
    return {
        sequelize,
        Sequelize,
        Model,
        DataTypes
    }
}
