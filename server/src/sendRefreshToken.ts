import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
    res.cookie("JID", token, {
        httpOnly: true,
        path: "/refresh_token",
    });
};
