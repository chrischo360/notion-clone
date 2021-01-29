import { objectType } from "nexus";

export const User = objectType({
    name: "User", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("email"); // <- Field named `title` of type `String`
        t.string("name"); // <- Field named `body` of type `String`
    },
});
