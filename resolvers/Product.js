exports.Product = {
    category: ({categoryId}, args, { categories }) => {
        const category = categories.find((category) => category.id === categoryId);
        return category;
    }
}