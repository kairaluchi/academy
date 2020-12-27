module.exports = `
    type Principle {
        id: ID!
        name: String!
        description: String
        examples: String!
    }
    
    type Query {
        principles: [Principle]
        principle(id: ID!): Principle
    }
    
    type Mutation {
        createPrinciple(input: AddPrincipleInput): Principle
    }
    
    input AddPrincipleInput {
        name: String!
        description: String
        examples: String
    }
`
