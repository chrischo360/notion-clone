import "dotenv/config";
import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { createConnection } from "typeorm";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import cors from "cors";
import { User } from "./entity/User";
import { sendRefreshToken } from "./sendRefreshToken";
import { createAccessToken, createRefreshToken } from "./auth";
// import { BlockResolver } from "./resolvers/BlockResolver";
import {PageResolver} from "./resolvers/PageResolver"
import {PubSub } from "apollo-server-express"
const http = require('http');



(async () => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
  app.use(cookieParser());
  app.get("/", (_req, res) => res.send("hello"));
  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    // token is valid and
    // we can send back an access token
    const user = await User.findOne({ id: payload.userId });

    if (!user) {
      return res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  await createConnection();

  const pubsub = new PubSub()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, PageResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res, pubsub }),
    subscriptions: {
      onConnect: async (connectionParams) => {
        console.log('xxx');
        console.log(connectionParams);
      },
    },
  
  });

  const httpServer = http.createServer(app);


  apolloServer.applyMiddleware({ app, cors: false });

  apolloServer.installSubscriptionHandlers(httpServer);


  httpServer.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:${4000}${apolloServer.graphqlPath}`,
    );
      console.log(
      `🚀 Subscriptions ready at ws://localhost:${4000}${apolloServer.subscriptionsPath}`,
    );
  
  });
})();

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));
