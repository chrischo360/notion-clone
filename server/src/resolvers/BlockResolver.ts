
  import { Block } from "../entity/Block";
import { Resolver, Query, InputType, Field, Arg, Mutation, Int } from "type-graphql";

@InputType()
class BlockInput {
    @Field()
    type: string
    @Field()
    content: string
}

@Resolver()
export class BlockResolver {
    @Query(() => [Block])
    async blocks() {
        const blocks = await Block.find()
        return blocks
    }

    @Query(() => Block)
    async block(@Arg("blockId") blockId: number) {
        const block = await Block.find({where: {id: blockId}})
        return block;

    }

    @Mutation(() => Block)
    createBlock(@Arg("input") input: BlockInput) {
        const block = Block.create(input).save()
        return block
    }

    @Mutation(() => Boolean)
    async updateBlock(
        @Arg("blockId", () => Int) blockId: number, 
        @Arg("type", () => String) type: string,
        @Arg("content", () => String) content: string,
        )  {
            // const block = {
            //     id: blockId,
            //     type,
            //     content
            // }
            // const blocks = await Block.save(block)
            // return blocks

            await Block.update({id: blockId}, {type, content})
            return true

            
            // const block = await Block.updateById
        //     const block = Block.save({
        //     id: blockId,
            
        // })
        // const block = await Block.update({ blockId}, input)
        // return block
    }

}