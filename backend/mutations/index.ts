import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from './addToCart';

// graphql tagged template literal
const graphql = String.raw;

export const extendGraphqlSchema = graphQLSchemaExtension({
    typeDefs: graphql`
        type Mutation {
            addToCart(productId: ID, size: String, price: Int): CartItem
        }
    `,
    resolvers: {
        Mutation: {
            addToCart,
        }
    }
})