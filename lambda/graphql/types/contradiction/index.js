module.exports = `
    type Contradiction {
        improve: Technical!
        preserve: Technical!
        principles: [Principle!]!
    }
    
    type Query {
        contradictions(improveId: ID!, preserveId: ID!): Contradiction
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
