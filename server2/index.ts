import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            name: "Chris",
            email: "chrischo360@gmail.com",
            pages: {
                create: { title: "Hello World" },
            },
            profile: {
                create: { bio: "I like turtles" },
            },
        },
    });
    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    });
    console.dir(allUsers, { depth: null });
}
main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
