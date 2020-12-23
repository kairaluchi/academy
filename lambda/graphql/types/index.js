const { mergeTypeDefs } = require('@graphql-tools/merge');
const technical = require('./technical')

const types = [
    technical
]

module.exports = mergeTypeDefs(types);
