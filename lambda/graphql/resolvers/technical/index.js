module.exports = {
  Query: {
    technicals: (rootValue, { id }, context) => {
      return context.technical.findAll()
    },
    technical: (rootValue, { id }, context) => {
      return context.technical.findByPk(id)
    }
  },

  Mutation: {
    createTechnical: (rootValue, { input }, context) => {
      return context.technical.create(input)
    }
  }
}
