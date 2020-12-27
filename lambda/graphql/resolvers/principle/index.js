module.exports = {
  Query: {
    principles: (rootValue, { id }, context) => {
      return context.principle.findAll()
    },
    principle: (rootValue, { id }, context) => {
      return context.principle.findByPk(id)
    }
  },

  Mutation: {
    createPrinciple: (rootValue, { input }, context) => {
      return context.principle.create(input)
    }
  }
}
