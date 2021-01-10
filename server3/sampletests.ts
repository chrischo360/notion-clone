import { Page, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const sampleUser1 = {
    name: "supermario",
    email: "supermario@gmail.com",
    // pages: [
    //     {
    //         title: "sample page 1",
    //     },
    //     {
    //         title: "sample page 2",
    //     },
    // ],
};

export const sampleBearPage = {
    title: "MORE FUCKING BEARS",
    cover:
        "https://i.picsum.photos/id/433/200/300.jpg?hmac=Y75_deyseM49Q8smDAbeRflgTmOchUngpd-QeDllW0g",
    emoji: "🗞",
    // blocks: {

    // }
};

interface createUserProps {
    name: string;
    email: string;
    // pages: [Page];
}

interface createPageProps {
    title: string;
    cover: string;
    emoji: string;
}

export const createUser = async ({ name, email }: createUserProps) => {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            confirmed: false,
            pages: {
                create: {
                    title: "Hello World",
                    cover:
                        "https://i.picsum.photos/id/433/200/300.jpg?hmac=Y75_deyseM49Q8smDAbeRflgTmOchUngpd-QeDllW0g",
                },
            },

            // pages: {
            //     create: { title: "Hello World" },
            // },
        },
    });

    return user;
};

export const createPage = async ({ title, cover, emoji }: createPageProps) => {
    const page = await prisma.page.create({
        data: {
            cover: cover,
            title: title,
            emoji: emoji,
            // updatedAt: "now",
            user: {
                connect: { email: "bobjunior@gmail.com" },
            },
            blocks: {
                create: {
                    content: "WOOH HOOH CONTENT!!! DRAMA!!!",
                },
            },
        },
    });
    return page;
};
