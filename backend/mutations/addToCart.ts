/* eslint-disable*/

import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput } from '../.keystone/schema-types;'
import { Session } from '../types';

async function addToCart(
    root: any,
    { productId, size, price }: { productId: String, size: String, price: Number },
    context: KeystoneContext
): Promise<CartItemCreateInput> {

    // 1. Query the current user and see if they are signed in
    const sesh = context.session as Session;

    if (!sesh.itemId) {
        throw new Error(' You must be logged in to do this.')
    }

    // 2. Query the current user's cart
    const allCartItems = await context.lists.CartItem.findMany({
        where: {
            user: { id: sesh.itemId},
            product: { id: productId },
            size: size,
        },
        resolveFields: 'id,quantity'
    });
    const [existingCartItem] = allCartItems;

    // 3. See if the item is in their cart
    // 4. If it is, increment by 1
    if (existingCartItem) {
        return await context.lists.CartItem.updateOne({
            id: existingCartItem.id,
            data: {
                quantity: existingCartItem.quantity + 1
            }
        });
    }

    // 5. If it isn't, create a new cart item
    return await context.lists.CartItem.createOne({
        data: {
            product: { connect: { id: productId }},
            size: size,
            price: price,
            user: {connect: {id: sesh.itemId }},
        },
        resolveFields: false,
    })
}

export default addToCart;