import { objectType, extendType } from "nexus";

export const Block = objectType({
    name: "Block", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("content"); // <- Field named `title` of type `String`
        // t.string("type"); // <- Field named `body` of type `String`
    },
});

export const BlockQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.field("blocks", {
            type: "Block",
            resolve(_root, _args, ctx) {
                return ctx.db.blocks;

                // return ctx.db.pages.filter((p) => p.id === true);
            },
        });
    },
});
