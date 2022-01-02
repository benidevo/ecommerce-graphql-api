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
        addProduct(input: productInput!): Product
        addProductReview(input: productReviewInput!): Review!
        deleteProduct(id: ID!): String!
        deleteCategory(id: ID!): String!
        updateProduct(id: ID!, input: productInput!): Product!
        updateCategory(id: ID!, categoryName: String!): Category!
        updateProductReview(id: ID!, input: productReviewInput!): Review!
        deleteProductReview(id: ID!): String!
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

    input productInput {
        name: String
        description: String
        quantity: Int
        image: String
        price: Float
        onSale: Boolean
        categoryId: ID
    }

    input productReviewInput {
        productId: ID
        title: String
        comment: String
        rating: Int
    }
`;
