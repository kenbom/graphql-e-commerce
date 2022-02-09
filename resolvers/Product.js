exports.Product = {
    category: ({categoryId}, args, { db }) => {
        const category = db.categories.find((category) => category.id === categoryId);
        return category;
    },

    reviews: ({id: productId}, args, {db}) => {
        const review = db.reviews.filter((review) => review.productId === productId);
        return review;
    }
}