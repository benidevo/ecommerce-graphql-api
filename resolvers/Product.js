exports.Product = {
    category: (parent, args, context) => {
        const { categories } = context;
        return categories.find((category) => category.id === parent.categoryId);
    },
    reviews: (parent, args, context) => {
        const { reviews } = context;
        return reviews.filter((review) => review.productId === parent.id);
    }
};
