const { mergeResolvers } = require('@graphql-tools/merge')
const technical = require('./technical')
const principle = require('./principle')

const resolvers = [
  technical,
  principle
]

module.exports = mergeResolvers(resolvers)
