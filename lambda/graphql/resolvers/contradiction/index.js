module.exports = {
  Query: {
    contradictions: (rootValue, { improveFeature, preserveFeature }, context) => {
      return context.contradiction.findAll({
        where: { improveFeature, preserveFeature },
        include: [{ model: context.technical, }, { model: context.principle }]
      })
    },
    contradiction: (rootValue, { id }, context) => {
      return context.contradiction.findOne({
        where: { id },
        include: [{ model: context.technical, }, { model: context.principle }]
      })
    }
  },

  Mutation: {
    createContradiction: (rootValue, { input }, context) => {
      return context.contradiction.create(input)
    }
  }
}
