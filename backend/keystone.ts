import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { CartItem } from './schemas/CartItem';
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';
import { Role } from './schemas/Role';
import { User } from './schemas/User';
import { withItemData, statelessSessions } from '@keystone-next/keystone/session';
import 'dotenv/config';
import { extendGraphqlSchema } from './mutations';

const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 7, // how long should a user stay signed in?
    secret: process.env.COOKIE_SECRET
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
        fields: ['firstName', 'lastName', 'email', 'password'],
        itemData: {
            role: {
                create: {
                    name: 'Admin',
                    canSeeOtherUsers: true,
                    canManageUsers: true,
                    canManageRoles: true,
                }
            }
        }
    }
})

export default withAuth(config({
    server: {
        cors: {
            origin: [process.env.FRONTEND_URL],
            credentials: true,
        }
    },
    db: {
        adapter: 'mongoose',
        url: databaseURL
    },
    lists: createSchema({
        User,
        Role,
        Product,
        ProductImage,
        CartItem,
    }),
    extendGraphqlSchema,
    ui: {
        // show the UI only for people who pass this test
        isAccessAllowed: ({ session }) => {
            // console.log(session);
            return !!session?.data
        }
    },
    session: withItemData(statelessSessions(sessionConfig), {
        User: `id name email role`
    })
}));