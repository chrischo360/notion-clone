import { NONAME } from "dns";
import { objectType, extendType, stringArg, nonNull } from "nexus";

export const Page = objectType({
    name: "Page", // <- Name of your type
    definition(t) {
        t.int("id"); // <- Field named `id` of type `Int`
        t.string("title"); // <- Field named `title` of type `String`
        t.string("cover"); // <- Field named `body` of type `String`
        t.string("emoji"); // <- Field named `published` of type `Boolean`
    },
});

// export const PageQuery = extendType({
//     type: "Query",
//     definition(t) {
//         t.nonNull.list.field("pages", {
//             type: "Page",
//             resolve(_root, _args, ctx) {
//                 return ctx.db.page.findMany();

//                 // return ctx.db.pages.filter((p) => p.id === true);
//             },
//         });
//     },
// });

// export const PageMutation = extendType({
//     type: "Mutation",
//     definition(t) {
//         t.nonNull.field("createPage", {
//             type: "Page",
//             args: {
//                 title: nonNull(stringArg()),
//                 emoji: nonNull(stringArg()),
//                 cover: nonNull(stringArg()),
//             },
//             resolve(_root, args, ctx) {
//                 const page = {
//                     title: args.title,
//                     cover: args.cover,
//                     emoji: args.emoji,
//                 };
//                 return ctx.db.page.create({
//                     data: {
//                         title: page.title,
//                         cover: page.cover,
//                         emoji: page.emoji,
//                     },
//                 });
//             },
//         });
//     },
// });
