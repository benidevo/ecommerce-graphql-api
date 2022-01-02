const { v4: uuid } = require('uuid');

exports.Mutation = {
    addCategory: (parent, args, context) => {
        const { categories } = context;
        const { name } = args.input;

        const newCategory = {
            id: uuid(),
            name
        };
        categories.push(newCategory);
        return newCategory;
    },

    addProduct: (parent, args, context) => {
        const {
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        } = args.input;
        const { products, categories } = context;

        // chcek if category exists
        const category = categories.find(
            (category) => category.id === categoryId
        );
        if (!category) {
            throw new Error('Category does not exist');
        }

        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            image,
            price,
            onSale,
            categoryId
        };

        products.push(newProduct);
        return newProduct;
    },

    addProductReview: (parent, args, context) => {
        const { reviews } = context;
        const { productId, title, comment, rating } = args.input;

        const newReview = {
            id: uuid(),
            date: new Date().toISOString(),
            title,
            comment,
            rating,
            productId
        };

        reviews.push(newReview);
        return newReview;
    },

    deleteProduct: (parent, args, context) => {
        const { products, reviews } = context;
        const { id } = args;

        const productIndex = products.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            return 'Product does not exist';
        }

        const reviewIndex = reviews.findIndex(
            (review) => review.productId === id
        );

        reviews.splice(reviewIndex, 1);

        products.splice(productIndex, 1);
        return `Product with id ${id} deleted`;
    },

    deleteCategory: (parent, args, context) => {
        const { categories, products } = context;
        const { id } = args;

        const categoryIndex = categories.findIndex(
            (category) => category.id === id
        );
        if (categoryIndex === -1) {
            return 'Category does not exist';
        }
        categories.splice(categoryIndex, 1);

        const productIndex = products.findIndex(
            (product) => product.categoryId === id
        );
        products[productIndex].categoryId = null;

        return `Category with id ${id} deleted`;
    }
};
