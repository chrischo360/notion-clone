import { User } from "@prisma/client";
import { verify } from "jsonwebtoken";
import { Context } from "./context";

export const APP_SECRET = "appsecret321";

interface Token {
    userId: string;
}

export const getUserId = (context: Context) => {
    // console.log("Authorization?:", context.req.get("Authorization"));
    const Authorization = context.req.get("Authorization");
    if (Authorization) {
        const token = Authorization.replace("Bearer ", "");
        const verifiedToken = verify(token, APP_SECRET) as Token;
        return verifiedToken && verifiedToken.userId;
    }
};

// export const getUser =

export const getUser = async (authorization, secret, db) => {
    const bearerLength = "Bearer ".length;
    if (authorization && authorization.length > bearerLength) {
        const token = authorization.slice(bearerLength);
        const { ok, result } = await new Promise((resolve) =>
            verify(token, secret, (err, result) => {
                if (err) {
                    resolve({
                        ok: false,
                        result: err,
                    });
                } else {
                    resolve({
                        ok: true,
                        result,
                    });
                }
            })
        );
        if (ok) {
            const user = await db.user({
                id: result.id,
            });
            return user;
        } else {
            console.error(result);
            return null;
        }
    }
    return null;
};
