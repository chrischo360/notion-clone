import express from "express";
import "dotenv/config";
import "reflect-metadata";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./schema";
import { verify } from "jsonwebtoken";
import { db } from "./db";
import { sendRefreshToken } from "./sendRefreshToken";
import { createAccessToken, createRefreshToken } from "./auth";
import { createContext } from "./context";

const main = async () => {
    const app = express();
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );
    app.use(cookieParser());

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
        const user = await db.user.findUnique({
            where: { id: payload.userId },
        });

        if (!user) {
            return res.send({ ok: false, accessToken: "" });
        }

        if (user.tokenVersion !== payload.tokenVersion) {
            return res.send({ ok: false, accessToken: "" });
        }

        sendRefreshToken(res, createRefreshToken(user));

        return res.send({ ok: true, accessToken: createAccessToken(user) });
    });

    const apolloServer = new ApolloServer({
        schema,
        context: createContext,
        // context: ({ req, res }) => ({ req, res, db }),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(4000, () => {
        console.log("EXPRESS SERVER UP AND RUNNING YESSIR");
    });
};

main().catch((error) => {
    console.log(error);
});
