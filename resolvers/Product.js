const { categories } = require('../data/categories');

exports.Product = {
    category: (parent, args, context) => {
        return categories.find((category) => category.id === parent.categoryId);
    }
};
