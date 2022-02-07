const { products, categories } = require("../db")
exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, args, {products}) => {
        return products;
    },

    product: (parent, {id: productId}, {products}) => {
        const product = products.find((product) => product.id === productId);
        if (!product) return null;
        return product;
    },

    categories: (parent, args, {categories}) => {
        return categories
    },

    category: (parent, {id: categoryId}, {categories}) => {
        const category = categories.find((category) => category.id === categoryId);
        if (!category) return null;
        return category;
    },
}