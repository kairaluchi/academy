module.exports = `
    type Contradiction {
        id: ID!
        improve: Technical!
        preserve: Technical!
        principles: [Principle!]!
    }
    
    type Query {
        contradictions(improveId: ID!, preserveId: ID!): [Contradiction]
        contradiction(id: ID!): Contradiction
    }
    
    type Mutation {
        createContradiction(input: AddContradictionInput): Contradiction
    }
    
    input AddContradictionInput {
        improveId: ID!
        preserveId: ID!
        principleIds: [ID!]!
    }
`
