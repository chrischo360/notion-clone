import { argsToArgsConfig } from "graphql/type/definition";
import { intArg, nullable, queryType, stringArg } from "nexus";
import { MyContext } from "../MyContext";
import { getUserId } from "../utils";

export const Query = queryType({
    definition(t) {
        t.nullable.field("me", {
            type: "User",
            resolve: (parents, args, ctx) => {
                const userId = getUserId(ctx);
                return ctx.db.user.findUnique({
                    where: {
                        id: Number(userId),
                    },
                });
            },
        });

        t.field("viewer", {
            type: "User",
            resolve: (parents, args, ctx) => {
                return ctx.currentUser;
            },
        });

        t.list.field("pages", {
            type: "Page",
            args: {
                userId: intArg(),
            },
            resolve: (parents, args, ctx) => {
                return ctx.db.page.findMany({
                    where: { creatorId: args.userId },
                });
            },
        });

        t.list.field("blocks", {
            type: "Block",
            args: {
                pageId: intArg(),
            },
            resolve: (parents, args, ctx) => {
                return ctx.db.block.findMany({
                    where: { pageId: args.pageId },
                });
            },
        });

        t.list.field("confirmedUsers", {
            type: "User",
            resolve: (parents, args, ctx) => {
                return ctx.db.user.findMany({
                    where: { confirmed: true },
                });
            },
        });

        t.nullable.field("page", {
            type: "Page",
            args: { id: intArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.db.page.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });

        t.nullable.field("user", {
            type: "User",
            args: { id: intArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.db.user.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });

        t.nullable.field("block", {
            type: "Block",
            args: { id: intArg() },
            resolve: (parent, { id }, ctx) => {
                return ctx.db.block.findUnique({
                    where: {
                        id: Number(id),
                    },
                });
            },
        });
    },
});
