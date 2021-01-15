import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";
import { APP_SECRET, getUserId } from "../utils";

import { intArg, mutationType, nonNull, nullable, stringArg } from "nexus";
import { context } from "../context";

export const Mutation = mutationType({
    definition(t) {
        t.field("register", {
            type: "AuthPayload",
            args: {
                name: nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_parent, { name, email, password }, ctx) => {
                try {
                    const existingUser = await ctx.db.user.findUnique({
                        where: {
                            email: email,
                        },
                    });
                    if (existingUser) {
                        throw new Error("ERROR: Username already used.");
                    }
                    const hashedPassword = await hash(password, 10);
                    const user = await ctx.db.user.create({
                        data: {
                            name,
                            email,
                            password: hashedPassword,
                        },
                    });
                    return {
                        token: sign({ userId: user.id }, APP_SECRET),
                        user,
                    };
                } catch (e) {
                    console.log(ctx.db.user);
                    // console.log(e);
                    return null;
                }

                // const hashedPassword = await hash(password, 10);
                // const user = await ctx.db.user.create({
                //     data: {
                //         name,
                //         email,
                //         password: hashedPassword,
                //     },
                // });
                // return {
                //     token: sign({ userId: user.id }, APP_SECRET),
                //     user,
                // };
            },
        });

        t.field("login", {
            type: "AuthPayload",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_, { email, password }, ctx) => {
                try {
                    const user = await ctx.db.user.findUnique({
                        where: {
                            email,
                        },
                    });
                    if (!user) {
                        throw new Error(`No user found for email: ${email}`);
                    }
                    const passwordValid = await compare(
                        password,
                        user.password
                    );
                    if (!passwordValid) {
                        throw new Error("Invalid password");
                    }
                    return {
                        token: sign({ userId: user.id }, APP_SECRET),
                        user,
                    };
                } catch (e) {
                    console.log(e);
                }

                // const user = await ctx.db.user.findUnique({
                //     where: {
                //         email,
                //     },
                // });
                // if (!user) {
                //     throw new Error(`No user found for email: ${email}`);
                // }
                // const passwordValid = await compare(password, user.password);
                // if (!passwordValid) {
                //     throw new Error("Invalid password");
                // }
                // return {
                //     token: sign({ userId: user.id }, APP_SECRET),
                //     user,
                // };
            },
        });

        t.field("createPage", {
            type: "Page",
            args: {
                title: nonNull(stringArg()),
                emoji: stringArg(),
                cover: stringArg(),
            },
            resolve: (parent, { title, emoji, cover }, ctx) => {
                const userId = getUserId(ctx);
                if (!userId) throw new Error("Could not authenticate user.");
                return ctx.db.page.create({
                    data: {
                        title,
                        emoji,
                        cover,
                        user: { connect: { id: Number(userId) } },
                    },
                });
            },
        });

        t.field("createBlock", {
            type: "Block",
            args: {
                content: stringArg(),
                type: stringArg(),
                pageId: intArg(),
            },
            resolve: (parent, { content, type, pageId }, ctx) => {
                return ctx.db.block.create({
                    data: {
                        content,
                        type,
                        page: { connect: { id: pageId } },
                    },
                });
            },
        });

        t.field("updatePage", {
            type: "Page",
            args: {
                title: stringArg(),
                emoji: stringArg(),
                cover: stringArg(),
                userId: intArg(),
            },
            resolve: (parent, { title, emoji, cover, userId }, ctx) => {
                return ctx.db.page.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        title,
                        emoji,
                        cover,
                    },
                });
            },
        });

        t.field("updateBlock", {
            type: "Block",
            args: {
                content: stringArg(),
                type: stringArg(),
                pageId: intArg(),
            },
            resolve: (parent, { content, type, pageId }, ctx) => {
                return ctx.db.page.update({
                    where: {
                        id: pageId,
                    },
                    data: {
                        content,
                        type,
                    },
                });
            },
        });

        t.field("deletePage", {
            type: "Page",
            args: {
                pageId: intArg(),
            },
            resolve: (parent, { pageId }, ctx) => {
                return ctx.db.page.delete({
                    where: { id: pageId },
                });
            },
        });

        t.field("deleteBlock", {
            type: "Block",
            args: {
                blockId: intArg(),
            },
            resolve: (parent, { blockId }, ctx) => {
                return ctx.db.block.delete({
                    where: { id: blockId },
                });
            },
        });
    },
});
