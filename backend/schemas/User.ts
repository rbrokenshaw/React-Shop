import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from '@keystone-next/fields';
import { isSignedIn } from "../access";

export const User = list({
    access: {
        create: () => true,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    ui: {
        listView: {
            initialColumns: ['firstName', 'lastName', 'email'],
        },
    },
    fields: {
        firstName: text({
            isRequired: true
        }),
        lastName: text({
            isRequired: true
        }),
        email: text({
            isRequired: true,
            isUnique: true
        }),
        password: password(),
        role: relationship({
            ref: 'Role.assignedTo',
        }),
        cart: relationship({
            ref: 'CartItem.user',
            many: true,
            ui: {
              createView: { fieldMode: 'hidden' },
              itemView: { fieldMode: 'read' },
            },
          })
    }
})