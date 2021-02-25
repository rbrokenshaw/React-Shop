import { integer, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { isSignedIn} from "../access";

export const CartItem = list({
    access: {
      create: isSignedIn,
      read: () => true,
      update: isSignedIn,
      delete: isSignedIn,
    },
    ui: {
      listView: {
        initialColumns: ['product', 'quantity', 'user'],
      }
    },
    fields: {
      // TODO: custom label
      quantity: integer({
        defaultValue: 1,
        isRequired: true,
      }),
      size: text(),
      price: integer(),
      product: relationship({ ref: 'Product' }),
      user: relationship({ ref: 'User.cart' }),
    },
  });