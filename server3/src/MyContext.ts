import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { db } from "./db";

export interface MyContext {
    db: PrismaClient;
    req: Request;
    res: Response;
    payload?: { userId: string };
}
