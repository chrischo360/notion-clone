import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// export interface Page {
//     id: number;
//     title: string;
//     cover: string;
//     emoji: string;
// }

// export interface User {
//     id: number;
//     email: string;
//     name: string;
//     confirmed: boolean;
// }

// export interface Block {
//     id: number;
//     content: string;
//     type: string;
// }

// export interface Db {
//     pages: Page[];
//     users: User[];
//     blocks: Block[];
// }

// export const db: Db = {
//     pages: [],
//     users: [],
//     blocks: [],

// pages: [{ id: 1, title: "my first page!!!", cover: "...", emoji: "..." }],
// users: [
//     {
//         id: 1,
//         email: "AK47@gmail.com",
//         name: "Andrew Kim",
//         confirmed: false,
//     },
// ],
// blocks: [
//     {
//         id: 1,
//         content: "YESSIR YESSIR",
//         type: "TEXT",
//     },
// ],
// };
