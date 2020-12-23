const { loadConnectors } = require('../connectors')
const Technical = require('./Technical')

exports.loadModels = (config) => {
  const connectors = loadConnectors(config)

  return {
    technical: Technical(connectors.sequelize)
  }
}
