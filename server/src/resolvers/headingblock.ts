import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { HeadingBlock } from "../entities/HeadingBlock";

@InputType()
class HeadingBlockInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int)
  boldness: number;
}

@Resolver()
export class HeadingBlockResolver {
  @Mutation(() => HeadingBlock)
  async createHeadingBlock(
    @Arg("content") content: string
  ): Promise<HeadingBlock> {
    const headingBlock = await HeadingBlock.create({ content }).save();

    return headingBlock;
  }

  @Mutation(() => Boolean)
  async updateHeadingBlock(
    @Arg("input") { id, content, boldness }: HeadingBlockInput
  ): Promise<Boolean> {
    await HeadingBlock.update(
      { id: id },
      { content: content, boldness: boldness }
    );
    return true;
  }

  @Query(() => HeadingBlock)
  HeadingBlock(@Arg("id") id: number) {
    return HeadingBlock.findOne(id);
  }
}
