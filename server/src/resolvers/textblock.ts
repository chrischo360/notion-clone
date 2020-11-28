import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { TextBlock } from "../entities/TextBlock";

@InputType()
class UpdateTextInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;
}

@Resolver()
export class TextBlockResolver {
  @Mutation(() => TextBlock)
  async createTextBlock(@Arg("content") content: string): Promise<TextBlock> {
    const textBlock = await TextBlock.create({ content }).save();

    return textBlock;
  }

  @Mutation(() => Boolean)
  async updateTextBlock(
    @Arg("input") { id, content }: UpdateTextInput
  ): Promise<Boolean> {
    await TextBlock.update({ id: id }, { content: content });
    return true;
  }

  @Query(() => TextBlock)
  textBlock(@Arg("id") id: number) {
    return TextBlock.findOne(id);
  }
}
