const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
  },

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quatity: Int!
    price: Float!
    onSale: Boolean
    category: Category
    reviews: [Review]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    # productId: ID!,
  }

  input ProductsFilterInput {
    onSale: Boolean
  },

  input AddCategoryInput {
    name: String
  }


`;
