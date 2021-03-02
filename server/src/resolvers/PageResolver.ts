import { Page } from "../entity/Page";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { v4 as uuidv4 } from 'uuid';

// import { MyContext } from "../MyContext";

@InputType()
class PageInput {
    @Field()
    cover: string
    @Field({defaultValue: "Untitled"})
    title: string
    @Field()
    emoji: string
    @Field()
    userId: number
}

@InputType()
class PageInputUpdate {
    @Field({nullable: true})
    cover: string
    @Field({nullable: true})
    title: string
    @Field({nullable: true})
    emoji: string
}

@Resolver()
export class PageResolver {
    @Query(() => Page)
    async page(@Arg("pageUrl") pageUrl: string) {
        // try {
            const page = await Page.findOne({where: {pageUrl: pageUrl}})
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

    @Mutation(() => Page)
    async createPage(
        @Arg("input") input: PageInput,
        // @Ctx() { payload }: MyContext
        ) {
        let page;
        // console.log(payload)
        try {
            page = await Page.create({
                title: input.title,
                emoji: input.emoji,
                cover: input.cover,
                userId: input.userId,
                pageUrl: input.title.replace(/\s+/g, '') + "-" + uuidv4()
                // userId: parseInt(payload!.userId)
            }).save()
        } catch (err) {
            console.log(err);
            // return false;
          }
          return page    
    }

    @Mutation(() => Boolean)
    async updatePage(@Arg("pageId") pageId: number, 
    @Arg("input") input: PageInputUpdate) {
        await Page.update({id: pageId},
            {
            ...input,
            pageUrl: input.title.replace(/\s+/g, '') + "-" + uuidv4()
        } )
        return true
    }
}