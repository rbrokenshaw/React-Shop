import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import { isSignedIn } from "../access";

export const Role = list({
    access: {
        create: isSignedIn,
        read: isSignedIn,
        update: isSignedIn,
        delete: isSignedIn,
    },
    fields: {
        name: text({
            isRequired: true
        }),
        assignedTo: relationship({
            ref: 'User.role',
            many: true,
            ui: {
                itemView: { fieldMode: 'read'}
            }
        })
    }
})