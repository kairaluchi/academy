module.exports = `
    type Technical {
        id: Int!
        name: String!
        description: String
    }
    
    type Query {
        technicals: [Technical]
        technical(id: Int!): Technical
    }
    
    type Mutation {
        createTechnical(input: AddTechnicalInput): Technical
    }
    
    input AddTechnicalInput {
        id: Int!
        name: String!
        description: String
    }
`
