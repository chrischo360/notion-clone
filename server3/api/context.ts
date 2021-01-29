import { db } from "./db";
import { PrismaClient, User } from "@prisma/client";
import { APP_SECRET, getUser, getUserId } from "./utils";

export interface Context {
    db: PrismaClient;
    req: any;
    currentUser: User;
}

// export default async ({ req }) => {
//     const currentUser = await getUser(
//       req.get("Authorization"),
//       config.jwt,
//       db
//     )
//     return {
//       db,
//       currentUser,
//     }
//   }

export default async ({ req }) => {
    // console.log("auth:", req.headers.Authorization);
    const currentUser = await getUser(req.get("Authorization"), APP_SECRET, db);
    // console.log("currentUser:", currentUser);
    return {
        db,
        currentUser,
    };
};

// const getCurrentUser = async (req) => {
//     const currentUser = await getUser(req.get("Authorization"), APP_SECRET, db);
//     return currentUser;
// };

// // const currentUser = async (req) => {
// //     await getUser(req.get("Authorization"), APP_SECRET, db);
// // };
// const user = getCurrentUser(req);

// export const context = {
//     db,
//     user,
// };

// export function createContext(req: Context) {
//     return {
//         ...req,
//         db,
//     };
// }
