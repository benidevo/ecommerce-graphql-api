exports.Category = {
    products: (parent, args, context) => {
        const { products } = context;
        const { filter } = args;
        if (filter) {
            return products.filter(
                (product) =>
                    product.categoryId === parent.id &&
                    product.onSale === filter.onSale
            );
        }
        return products.filter((product) => product.categoryId === parent.id);
    }
};
