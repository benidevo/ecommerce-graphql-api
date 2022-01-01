const { products } = require('../data/products');

exports.Category = {
    products: (parent, args, context) => {
        return products.filter((product) => product.categoryId === parent.id);
    }
};
