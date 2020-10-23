const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    firstName: String
    message: String
  }
`;

const resolvers = {
  Query: {
    firstName: (parent , args , context) =>{
      return "Muhibullah Khan "
    },
    message: (parent, args, context) => {
      return "Hello world from Graphql Gatsby and Netlify. This is Muhibullah Khan Kamali. I love serverless!";
    }

  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();
