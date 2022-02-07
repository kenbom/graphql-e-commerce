exports.Category = {
    products: ({id: categoryId}, args, {products}) => {
        const product = products.filter((product) => product.categoryId === categoryId)
        return product
    },

}