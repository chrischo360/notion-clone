import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { PageBlock } from "../entities/PageBlock";

@InputType()
class PageBlockInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => String)
  pagelink: string;
}

@Resolver()
export class PageBlockResolver {
  @Mutation(() => PageBlock)
  async createTextBlock(@Arg("content") content: string): Promise<PageBlock> {
    const pageBlock = await PageBlock.create({ content }).save();

    return pageBlock;
  }

  @Mutation(() => Boolean)
  async updatePageBlock(
    @Arg("input") { id, content, pagelink }: PageBlockInput
  ): Promise<Boolean> {
    await PageBlock.update(
      { id: id },
      { content: content, pagelink: pagelink }
    );
    return true;
  }

  @Query(() => PageBlock)
  PageBlock(@Arg("id") id: number) {
    return PageBlock.findOne(id);
  }
}
