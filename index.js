const { ApolloServer } = require("apollo-server");
const { products, categories, reviews } = require("./db");
const { typeDefs } = require("./schema");

const resolvers = {
    Query: {
        hello: () => {
            return "world!";
        },

        products: () => {
            return products;
        },

        product: (parent, args, context) => {
            const productId = args.id;
            const product = products.find((product) => product.id === productId);
            if (!product) return null;
            return product;
        },

        categories: () => {
            return category
        },

        category: (parent, args, context) => {
            const categoryId = args.id;
            const category = categories.find((category) => category.id === categoryId);
            if (!category) return null;
            return category;
        },
    },

    Category: {
        products: (parent, args, context) => {
            const categoryId = parent.id
            const product = products.filter((product) => product.categoryId === categoryId)
            return product
        },

    },

    Product: {
        category: (parent, args, context) => {
            const categoryId = parent.categoryId;
            const category = categories.find((category) => category.id === categoryId);
            return category;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});
