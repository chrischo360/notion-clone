import { intArg, nonNull, queryType } from "nexus";
import { verify } from "jsonwebtoken";

export const Query = queryType({
    definition(t) {
        t.nullable.field("me", {
            type: "User",
            resolve: (_parent, _args, ctx) => {
                const authorization = ctx.req.headers["authorization"];

                if (!authorization) {
                    return null;
                }

                try {
                    const token = authorization.split(" ")[1];
                    const payload: any = verify(
                        token,
                        process.env.ACCESS_TOKEN_SECRET!
                    );
                    return ctx.prisma.user.findUnique({
                        where: {
                            id: payload.userId,
                        },
                    });
                } catch (err) {
                    console.log(err);
                    return null;
                }
            },
        });

        t.list.field("users", {
            type: "User",
            resolve: async (_parent, _args, ctx) => {
                return await ctx.prisma.user.findMany();
            },
        });

        t.list.field("pages", {
            type: "Page",
            args: {
                userId: nonNull(intArg()),
            },
            resolve: async (_parent, { userId }, ctx) => {
                return await ctx.prisma.page.findMany({
                    where: { creatorId: userId },
                });
            },
        });

        t.list.field("blocks", {
            type: "Block",
            args: {
                pageId: nonNull(intArg()),
            },
            resolve: async (_parent, { pageId }, ctx) => {
                return await ctx.prisma.block.findMany({
                    where: { id: pageId },
                });
            },
        });

        t.nullable.field("page", {
            type: "Page",
            args: { id: nonNull(intArg()) },
            resolve: async (_parent, { id }, ctx) => {
                return await ctx.prisma.page.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });

        t.nullable.field("user", {
            type: "User",
            args: { id: intArg() },
            resolve: async (_parent, { id }, ctx) => {
                return await ctx.prisma.user.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });

        t.nullable.field("block", {
            type: "Block",
            args: { id: intArg() },
            resolve: async (_parent, { id }, ctx) => {
                return await ctx.prisma.block.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });
    },
});
