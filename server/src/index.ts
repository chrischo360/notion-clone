import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
// import { Page } from "./entities/Page";
// import { Block } from "./entities/Block";
// import { BlockResolver } from "./resolvers/block";
// import { PageResolver } from "./resolvers/page";
import { UserResolver } from "./resolvers/user";
import connectRedis from "connect-redis";
import { redis } from "./redis";
import cors from "cors";
import express from "express";
import { TextBlockResolver } from "./resolvers/textblock";
import { TodoBlockResolver } from "./resolvers/todoblock";
import { BulletBlockResolver } from "./resolvers/bulletblock";
import { HeadingBlockResolver } from "./resolvers/headingblock";
import { NumberedBlockResolver } from "./resolvers/numberedblock";
import { PageResolver } from "./resolvers/page";
import { PageBlockResolver } from "./resolvers/pageblock";
import { ToggleBlockResolver } from "./resolvers/toggleblock";
var session = require("express-session");

const main = async () => {
  createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "notiondb",
    entities: [__dirname + "/entities/**.ts"],
    synchronize: true,
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        BulletBlockResolver,
        HeadingBlockResolver,
        NumberedBlockResolver,
        PageResolver,
        PageBlockResolver,
        TextBlockResolver,
        TodoBlockResolver,
        ToggleBlockResolver,
        UserResolver,
      ],
    }),
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  const app = express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "wewewqeeqds",
      resave: false,
      saveUnitialized: true,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    } as any)
  );

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
