import { objectType, extendType } from "nexus";

export const Block = objectType({
    name: "Block", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("content"); // <- Field named `title` of type `String`
        t.string("type"); // <- Field named `body` of type `String`
    },
});
