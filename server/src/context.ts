import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
// import { db } from "./db";

const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient;
    req: Request;
    res: Response;
    payload?: { userId: string };
}

export function createContext(req: any) {
    return { ...req, prisma };
}
