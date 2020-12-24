const { ApolloServer } = require('apollo-server-lambda')
const typeDefs = require('./graphql/types')
const resolvers = require('./graphql/resolvers')
const { loadModels } = require('./models')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    ...isProd && { ssl: true, dialectOptions: { ssl: true } },
  }
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
