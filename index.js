const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require('./resolvers/Query');
const { Mutation } = require('./resolvers/Mutation');
const { Category } = require('./resolvers/Category');
const { products } = require('./data/products');
const { categories } = require('./data/categories');
const { Product } = require('./resolvers/Product');
const { reviews } = require('./data/reviews');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Category,
        Product
    },
    context: {
        products,
        categories,
        reviews
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
