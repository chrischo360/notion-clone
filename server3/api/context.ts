import { db } from "./db";
import { PrismaClient } from "@prisma/client";

export interface Context {
    db: PrismaClient;
    req: any;
}

export const context = {
    db,
};

export function createContext(req: Context) {
    return {
        ...req,
        db,
    };
}
