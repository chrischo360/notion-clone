import { intArg, mutationType, nonNull, stringArg } from "nexus";
import { hash, compare } from "bcryptjs";
import { createAccessToken, createRefreshToken } from "../auth";
import { sendRefreshToken } from "../sendRefreshToken";
import { BlockType } from "./BlockType";

export const Mutation = mutationType({
    definition(t) {
        t.field("register", {
            type: "Boolean",
            args: {
                name: nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_parent, { name, email, password }, ctx) => {
                const hashedPassword = await hash(password, 12);
                try {
                    await ctx.prisma.user.create({
                        data: {
                            name,
                            email,
                            password: hashedPassword,
                        },
                    });
                } catch (err) {
                    console.log(err);
                    return false;
                }
                return true;
            },
        });

        t.field("login", {
            type: "AuthPayload",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_, { email, password }, ctx) => {
                const user = await ctx.prisma.user.findUnique({
                    where: { email: email },
                });

                // console.log("User:", user);

                if (!user) {
                    throw new Error("could not find user");
                }

                const validPassword = await compare(password, user.password);

                if (!validPassword) {
                    throw new Error("bad password");
                }

                sendRefreshToken(ctx.res, createRefreshToken(user));

                return {
                    accessToken: createAccessToken(user),
                    user,
                };
            },
        });

        t.field("logout", {
            type: "Boolean",
            resolve: async (_, __, ctx) => {
                sendRefreshToken(ctx.res, "");

                return true;
            },
        });

        t.field("revokeRefreshTokensForUser", {
            type: "Boolean",
            args: {
                userId: nonNull(intArg()),
            },
            resolve: async (_, { userId }, ctx) => {
                await ctx.prisma.user.update({
                    where: { id: userId },
                    data: {
                        tokenVersion: {
                            increment: 1,
                        },
                    },
                });

                return true;
            },
        });

        t.field("createPage", {
            type: "Page",
            args: {
                title: nonNull(stringArg()),
                emoji: stringArg(),
                cover: stringArg(),
                userId: intArg(),
            },
            resolve: (_parent, { title, emoji, cover, userId }, ctx) => {
                // const userId = getUserId(ctx);
                // if (!userId) throw new Error("Could not authenticate user.");
                console.log("USERID", ctx.payload?.userId);
                return ctx.prisma.page.create({
                    data: {
                        title,
                        emoji,
                        cover,
                        user: { connect: { id: Number(userId) } },
                        // user: { connect: { id: Number(ctx.payload?.userId) } },
                    },
                });
            },
        });

        t.field("createBlock", {
            type: "Block",
            args: {
                content: nonNull(stringArg()),
                type: nonNull(BlockType),
                // type: nonNull(stringArg()),
                pageId: nonNull(intArg()),
            },
            resolve: (_parent, { content, type, pageId }, ctx) => {
                return ctx.prisma.block.create({
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
                title: nonNull(stringArg()),
                emoji: stringArg(),
                cover: stringArg(),
                pageId: nonNull(intArg()),
            },
            resolve: (_parent, { title, emoji, cover, pageId }, ctx) => {
                return ctx.prisma.page.update({
                    where: {
                        id: pageId,
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
                content: nonNull(stringArg()),
                type: nonNull(stringArg()),
                blockId: nonNull(intArg()),
            },
            resolve: (_parent, { content, type, blockId }, ctx) => {
                return ctx.prisma.block.update({
                    where: {
                        id: blockId,
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
                pageId: nonNull(intArg()),
            },
            resolve: (_parent, { pageId }, ctx) => {
                return ctx.prisma.page.delete({
                    where: { id: pageId },
                });
            },
        });

        t.field("deleteBlock", {
            type: "Block",
            args: {
                blockId: nonNull(intArg()),
            },
            resolve: (_parent, { blockId }, ctx) => {
                return ctx.prisma.block.delete({
                    where: { id: blockId },
                });
            },
        });
    },
});
