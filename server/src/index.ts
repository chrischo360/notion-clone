import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import connectRedis from "connect-redis";
import { redis } from "./redis";
import cors from "cors";
import express from "express";
import * as typeorm from "typeorm";
import { Container } from "typedi";
// import session from "express-session";
// import Redis from "ioredis";
const session = require("express-session");
// const redis = require("ioredis")

typeorm.useContainer(Container);

const main = async () => {
  createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "notiondb",
    entities: [__dirname + "/entities/*.js"],
    synchronize: true,
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname + "/resolvers/*.js"],
      container: Container,
    }),
    context: ({ req, res }: any) => ({
      req,
      res,
      redis,
    }),
  });

  const app = express();

  const RedisStore = connectRedis(session);
  // const redis = new Redis({
  //   port: 6379,
  //   host: "127.0.0.1",
  // });

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
      saveUnitialized: false,
      cookie: {
        httpOnly: true,
        secure: "false",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    } as any)
  );

  // const apolloServer = new ApolloServer({
  //   schema: await buildSchema({
  //     resolvers: [__dirname + "/resolvers/*.js"],
  //     container: Container,
  //   }),
  //   context: ({ req, res }) => ({
  //     req,
  //     res,
  //     redis,
  //   }),
  // });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

console.log(redis.status);

main().catch((err) => {
  console.error(err);
});
