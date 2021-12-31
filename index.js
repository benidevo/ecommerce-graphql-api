const { ApolloServer, gql } = require('apollo-server');
const {products} = require('./data/products');

const typeDefs = gql`
    type Query {
        hello: String
        products: [Product]
    }

    type Product {
        name: String
        description: String
        quantity: Int
        image: String
        price: Float
        onSale: Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        products: () => {
            return products;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
