const { ApolloServer, gql } = require('apollo-server-azure-functions');
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core');

// Schema definition.
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Resolver map.
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

// Create our server.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});
exports.graphqlHandler = server.createHandler();