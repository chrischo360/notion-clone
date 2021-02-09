import { Page } from "../entity/Page";
import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "../MyContext";

@InputType()
class PageInput {
    @Field()
    cover: string
    @Field()
    title: string
    @Field()
    emoji: string
}

@Resolver()
export class PageResolver {
    @Query(() => Page)
    async page(@Arg("pageId") pageId: number) {
        const page = await Page.find({where: {id: pageId}})
        return page
    }

    @Query(() => [Page])
    async pages() {
        const pages = await Page.find()
        return pages
    }

    @Mutation(() => Page)
    async createPage(
        @Arg("input") input: PageInput,
        @Ctx() { payload }: MyContext
        ) {
        const page = Page.create({
            title: input.title,
            emoji: input.emoji,
            cover: input.cover,
            userId: parseInt(payload!.userId)
        });
        return page
    }

    @Mutation(() => Boolean)
    async updatePage(@Arg("pageId") pageId: number, 
    @Arg("input") input: PageInput) {
        await Page.update({id: pageId}, input )
    }
}