module.exports = `
    type Principle {
        id: Int!
        name: String!
        description: String
        examples: String!
    }
    
    type Query {
        principles: [Principle]
        principle(id: Int!): Principle
    }
    
    type Mutation {
        createPrinciple(input: AddPrincipleInput): Principle
    }
    
    input AddPrincipleInput {
        id: Int!
        name: String!
        description: String
        examples: String
    }
`
