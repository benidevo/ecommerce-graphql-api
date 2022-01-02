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
        const { name, description, quantity, image, price, onSale, categoryId } = args.input;
        const { products, categories } = context;
        
        // chcek if category exists
        const category = categories.find(category => category.id === categoryId);
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
        }

        products.push(newProduct);
        return newProduct;
    }
};
