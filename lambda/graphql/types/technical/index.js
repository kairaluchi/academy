module.exports = `
    type Technical {
        id: ID!
        name: String!
        description: String
    }
    
    type Query {
        technicals: [Technical]
        technical(id: ID!): Technical
    }
    
    type Mutation {
        createTechnical(input: AddTechnicalInput): Technical
    }
    
    input AddTechnicalInput {
        name: String!
        description: String
    }
`
