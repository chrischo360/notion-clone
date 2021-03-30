import { Page } from "../entity/Page";
import { Arg, Field, InputType, Mutation, ObjectType, PubSub, PubSubEngine, Query, Resolver, Root, Subscription } from "type-graphql";
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
    @Field({defaultValue: "Content"})
    content: string
}

@InputType()
class PageInputUpdate {
    @Field({nullable: true})
    cover: string
    @Field({nullable: true})
    title: string
    @Field({nullable: true})
    emoji: string
    @Field({nullable: true})
    content: string
}

interface PagePayload {
    title: string;
    cover: string;
    emoji: string;
    content: string;
}

@ObjectType()
class PageResult {
    @Field({nullable: true})
    cover: string
    @Field({nullable: true})
    title: string
    @Field({nullable: true})
    emoji: string
    @Field({nullable: true})
    content: string
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
        @PubSub() pubSub: PubSubEngine
        // @Ctx() { payload }: MyContext
        ) {
        let page;
        // console.log(payload)
        try {
            // const payload: PageInput = 
            //     input
            // ;
            let payload = {
                title: input.title,
                cover: input.cover,
                emoji: input.emoji,
                content: input.content
            }
            await pubSub.publish("PAGES", payload);
            // await pubSub.publish("PAGES", payload);

            page = await Page.create({
                title: input.title,
                emoji: input.emoji,
                cover: input.cover,
                userId: input.userId,
                content: input.content,
                pageUrl: uuidv4()
                // userId: parseInt(payload!.userId)
            }).save()

            return page
        } catch (err) {
            console.log(err);
            // return false;
          }
          return page    
    }

    @Mutation(() => Boolean)
    async updatePage(@Arg("pageId") pageId: number, 
    @Arg("input") input: PageInputUpdate,
    @PubSub() pubSub: PubSubEngine) {
        let payload = {
            title: input.title,
            cover: input.cover,
            emoji: input.emoji,
            content: input.content
        }
        await pubSub.publish("PAGES", payload);

        await Page.update({id: pageId},
            {
            ...input,
        } )
        return true
    }

    // @Mutation(() => Boolean)
    // async updatePageTitle(@Arg("pageId") pageId: number, 
    // @Arg("title") title: string) {
    //     await Page.update({id: pageId},
    //         {
    //         title,
    //         // pageUrl: title.replace(/\s+/g, '') + "-" + uuidv4()
    //     } )
    //     return true
    // }


    @Subscription(() => PageResult, {
        topics: "PAGES",
    })
    async newPage(
        @Root() pagePayload: PagePayload,
    ) : Promise<PageResult>  {
        return {
            title: pagePayload.title,
            cover: pagePayload.cover,
            emoji: pagePayload.emoji,
            content: pagePayload.content
        };
    }
}