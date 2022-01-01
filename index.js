const { ApolloServer, gql } = require('apollo-server');
const { products } = require('./data/products');
const { categories } = require('./data/categories');

const typeDefs = gql`
    type Query {
        hello: String
        products: [Product]
        product(id: ID!): Product
        categories: [Category]
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String
        description: String
        quantity: Int
        image: String
        price: Float
        onSale: Boolean
        category: Category
    }

    type Category {
        id: ID!
        name: String
        products: [Product]
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        products: () => {
            return products;
        },
        product: (parent, args, context) => {
            return products.find((product) => product.id === args.id);
        },
        categories: () => {
            return categories;
        },
        category: (parent, args, context) => {
            return categories.find((category) => category.id === args.id);
        }
    },
    Category: {
        products: (parent, args, context) => {
            return products.filter((product) => product.categoryId === parent.id);
        }
    },
    Product: {
        category: (parent, args, context) => {
            return categories.find((category) => category.id === parent.categoryId);
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
