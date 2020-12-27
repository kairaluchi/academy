const { mergeTypeDefs } = require('@graphql-tools/merge')
const technical = require('./technical')
const principle = require('./principle')

const types = [
  technical,
  principle
]

module.exports = mergeTypeDefs(types)
