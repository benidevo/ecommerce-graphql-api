const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductFilterInput): [Product]
        product(id: ID!): Product
        categories: [Category]
        category(id: ID!): Category
    }

    type Mutation {
        addCategory(input: addCategoryInput!): Category
        addProduct(input: addProductInput!): Product
        addProductReview(input: addProductReviewInput!): Review!
        deleteProduct(id: ID!): String!
        deleteCategory(id: ID!): String!
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
        reviews: [Review]
    }

    type Category {
        id: ID!
        name: String
        products(filter: ProductFilterInput): [Product]
    }

    type Review {
        id: ID!
        date: String
        title: String
        comment: String
        rating: Int
        productId: ID
    }

    input ProductFilterInput {
        onSale: Boolean
        avgRating: Int
    }
    
    input addCategoryInput {
        name: String
    }
    
    input addProductInput {
        name: String
        description: String
        quantity: Int
        image: String
        price: Float
        onSale: Boolean
        categoryId: ID
    }

    input addProductReviewInput {
        productId: ID!
        title: String!
        comment: String!
        rating: Int!
    }


`;
