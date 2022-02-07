exports.Product = {
    category: ({categoryId}, args, { categories }) => {
        const category = categories.find((category) => category.id === categoryId);
        return category;
    },

    reviews: ({id: productId}, args, {reviews}) => {
        const review = reviews.filter((review) => review.productId === productId);
        return review;
    }
}