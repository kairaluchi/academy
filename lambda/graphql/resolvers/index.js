const { mergeResolvers } = require('@graphql-tools/merge')
const technical = require('./technical')

const resolvers = [
  technical
]

module.exports = mergeResolvers(resolvers)
