const { products } = require('../data/products');
const { categories } = require('../data/categories');

exports.Query = {
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
};
