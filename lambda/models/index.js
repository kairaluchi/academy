const { loadConnectors } = require('../connectors')
const Technical = require('./Technical')
const Principle = require('./Principle')
const Contradiction = require('./Contradiction')

exports.loadModels = (config) => {
  const connectors = loadConnectors(config)

  return {
    technical: Technical(connectors.sequelize),
    principle: Principle(connectors.sequelize),
    contradiction: Contradiction(connectors.sequelize)
  }
}
