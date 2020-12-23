const { ApolloServer } = require('apollo-server-lambda')
const typeDefs = require('./graphql/types')
const resolvers = require('./graphql/resolvers')
const { loadModels } = require('./models')

const config = {
  connectionString: process.env.POSTGRES_CONNECTION_STRING
}

const models = loadModels(config)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { ...models },
  playground: true,
  introspection: true
})

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
