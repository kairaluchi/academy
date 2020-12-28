const { mergeResolvers } = require('@graphql-tools/merge')
const technical = require('./technical')
const principle = require('./principle')
const contradiction = require('./contradiction')

const resolvers = [
  technical,
  principle,
  contradiction
]

module.exports = mergeResolvers(resolvers)
