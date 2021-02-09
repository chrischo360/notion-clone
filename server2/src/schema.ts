import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
    types,
    outputs: {
        schema: join(__dirname, "generated/schema.gen.graphql"),
        typegen: join(__dirname, "generated/nexusTypes.gen.ts"),
        // typegen: join(__dirname, "nexus-typegen.ts"), // 2
        // schema: join(__dirname, "schema.graphql"), // 3
    },
    contextType: {
        module: join(__dirname, "./context.ts"),
        alias: "ctx", // 2
        export: "Context",
    },
    plugins: [
        nexusPrisma({
            experimentalCRUD: true,
        }),
    ],
});
