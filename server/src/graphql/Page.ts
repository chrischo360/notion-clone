import { objectType } from "nexus";

export const Page = objectType({
    name: "Page", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("title"); // <- Field named `title` of type `String`
        t.string("cover"); // <- Field named `body` of type `String`
        t.string("emoji"); // <- Field named `published` of type `Boolean`
    },
});
