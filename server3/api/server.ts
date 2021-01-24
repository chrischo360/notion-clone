import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import Context from "./context";
// import { context, createContext } from "./context";
export const server = new ApolloServer({
    schema,
    context: Context,
    introspection: true,
    playground: {
        settings: {
            "editor.theme": "light",
        },
    },
});
