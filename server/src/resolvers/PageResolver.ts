import { Page } from "../entity/Page";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
// import { MyContext } from "../MyContext";

@InputType()
class PageInput {
    @Field()
    cover: string
    @Field()
    title: string
    @Field()
    emoji: string
    @Field()
    userId: number
}

@Resolver()
export class PageResolver {
    @Query(() => Page)
    async page(@Arg("pageId") pageId: number) {
        // try {
            const page = await Page.findOne({where: {id: pageId}})
            console.log(page)
            return page
        // } catch (error) {
        //     console.log(error)
        // }
        // return page
    }

    @Query(() => [Page])
    async pages(@Arg("userId") userId: number) {
        const pages = await Page.find({where: {userId: userId}})
        return pages
    }

    @Mutation(() => Boolean)
    async createPage(
        @Arg("input") input: PageInput,
        // @Ctx() { payload }: MyContext
        ) {
        // console.log(payload)
        try {
            await Page.create({
                title: input.title,
                emoji: input.emoji,
                cover: input.cover,
                userId: input.userId
                // userId: parseInt(payload!.userId)
            }).save()
            return true
        } catch (err) {
            console.log(err);
            return false;
          }        
    }

    @Mutation(() => Boolean)
    async updatePage(@Arg("pageId") pageId: number, 
    @Arg("input") input: PageInput) {
        await Page.update({id: pageId}, input )
    }
}