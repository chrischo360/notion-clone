import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
    types, // 1
    outputs: {
        typegen: join(__dirname, "..", "nexus-typegen.ts"), // 2
        schema: join(__dirname, "..", "schema.graphql"), // 3
    },
    contextType: {
        module: join(__dirname, "./context.ts"), // 2
        alias: "ContextModule",
        export: "Context",
    },
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
        }),
    ],
});
