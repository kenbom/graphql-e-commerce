const { db } = require("../db")
exports.Query = {
    hello: (parent, args, context) => {
        return "world!";
    },

    products: (parent, {filter}, {db}) => {
        let filteredProducts = db.products;

        if(filter) {
            if(filter.onSale === true) {
                filteredProducts = filteredProducts.filter((product) => {
                    return product.onSale;
                });
            }
        }
        return filteredProducts;
    },

    product: (parent, {id: productId}, {db}) => {
        const product = db.products.find((product) => product.id === productId);
        if (!product) return null;
        return product;
    },

    categories: (parent, args, {db}) => {
        return db.categories
    },

    category: (parent, {id: categoryId}, {db}) => {
        const category = db.categories.find((category) => category.id === categoryId);
        if (!category) return null;
        return category;
    },
}