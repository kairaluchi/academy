const { Op } = require('sequelize')

module.exports = {
  Query: {
    contradictions: async (rootValue, { improveId, preserveId }, context) => {
      const data = await context.contradiction.findAll({
        where: { improveId, preserveId },
      })
      return data.reduce((acc, curr) => {
        if (!acc.improveId) acc.improveId = curr.improveId
        if (!acc.preserveId) acc.preserveId = curr.preserveId
        acc.principleIds = acc.principleIds.concat([curr.principleId])
        return acc
      }, { principleIds: [] })
    },
  },

  Contradiction: {
    improve: (contradiction, args, context) => {
      console.log('IMPROVE', contradiction)
      return context.technical.findByPk(contradiction.improveId)
    },
    preserve: (contradiction, args, context) => {
      console.log('PRESERVE', contradiction)
      return context.technical.findByPk(contradiction.preserveId)
    },
    principles: (contradiction, args, context) => {
      console.log('PRINCIPLES', contradiction)
      return context.principle.findAll({
        where: {
          id: {
            [Op.in]: contradiction.principleIds
          }
        }
      })
    }
  },

  Mutation: {
    createContradiction: (rootValue, { input }, context) => {
      const { improveId, preserveId, principleIds } = input
      return Promise.all(principleIds.map(principleId => context.contradiction.create({
        improveId, preserveId, principleId
      })))
    }
  }
}
