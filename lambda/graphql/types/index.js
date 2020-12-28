const { mergeTypeDefs } = require('@graphql-tools/merge')
const technical = require('./technical')
const principle = require('./principle')
const contradiction = require('./contradiction')

const types = [
  technical,
  principle,
  contradiction
]

module.exports = mergeTypeDefs(types)
