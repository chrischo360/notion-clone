import { objectType, extendType, nonNull, stringArg } from "nexus";

export const User = objectType({
    name: "User", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("email"); // <- Field named `title` of type `String`
        t.string("name"); // <- Field named `body` of type `String`
        t.string("confirmed"); // <- Field named `published` of type `Boolean`
    },
});

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("users", {
            type: "User",
            resolve(_root, _args, ctx) {
                return ctx.db.users;

                // return ctx.db.pages.filter((p) => p.id === true);
            },
        });
    },
});

export const UserMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("register", {
            type: "User",
            args: {
                email: nonNull(stringArg()),
                name: nonNull(stringArg()),
                cover: nonNull(stringArg()),
            },
            resolve(_root, args, ctx) {
                const user = {
                    id: ctx.db.users.length + 1,
                    email: args.email,
                    name: args.name,
                    confirmed: false,
                };
                ctx.db.users.push(user);
                return user;
            },
        });
    },
});
