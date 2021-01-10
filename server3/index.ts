import { Page, PrismaClient } from "@prisma/client";
import {
    sampleUser1,
    createUser,
    createPage,
    sampleBearPage,
} from "./sampletests";
const prisma = new PrismaClient();

async function main() {
    // const sampleUser = await reateUser(sampleUser1);
    // console.log("user:", sampleUserc);
    // const samplePage = await createPage(sampleBearPage);
    // console.log("page:", samplePage);
}
main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
