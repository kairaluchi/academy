const { loadConnectors } = require('../connectors')
const Technical = require('./Technical')
const Principle = require('./Principle')

exports.loadModels = (config) => {
  const connectors = loadConnectors(config)

  return {
    technical: Technical(connectors.sequelize),
    principle: Principle(connectors.sequelize)
  }
}
