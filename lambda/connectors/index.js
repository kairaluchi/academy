const getSequelize = require('./sequelize')

exports.loadConnectors = (config) => {
    console.log('CONFIG', config.connectionString)
    const sequelize = getSequelize(config.connectionString)
    return {
        sequelize
    }
}
