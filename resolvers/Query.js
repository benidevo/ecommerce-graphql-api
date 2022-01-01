exports.Query = {
    hello: () => 'Hello world!',
    products: (parent, args, context) => {
        const { onSale, avgRating } = args.filter;
        if (onSale) {
            return context.products.filter(
                (product) => product.onSale === filter.onSale
            );
        }
        if (avgRating <= 5) {
            const filteredProducts = context.products.filter((product) => {
                let sumRating = 0;
                let numberOfReviews = 0;
                context.reviews.forEach((review) => {
                    if (review.productId === product.id) {
                        sumRating += review.rating;
                        numberOfReviews++;
                    }
                });
                const avgProductRating = sumRating / numberOfReviews;

                return avgProductRating >= avgRating;
            });

            return filteredProducts;
        }

        return context.products;
    },
    product: (parent, args, context) => {
        const { products } = context;
        return products.find((product) => product.id === args.id);
    },
    categories: (parent, args, context) => {
        return context.categories;
    },
    category: (parent, args, context) => {
        const { categories } = context;
        return categories.find((category) => category.id === args.id);
    }
};
