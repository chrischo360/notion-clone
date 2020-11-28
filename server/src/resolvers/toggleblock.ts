import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { ToggleBlock } from "../entities/ToggleBlock";

@InputType()
class ToggleBlockInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int)
  indentationlevel: number;
}

@Resolver()
export class ToggleBlockResolver {
  @Mutation(() => ToggleBlock)
  async createTextBlock(@Arg("content") content: string): Promise<ToggleBlock> {
    const toggleBlock = await ToggleBlock.create({ content }).save();

    return toggleBlock;
  }

  @Mutation(() => Boolean)
  async updateToggleBlock(
    @Arg("input") { id, content, indentationlevel }: ToggleBlockInput
  ): Promise<Boolean> {
    await ToggleBlock.update(
      { id: id },
      { content: content, indentationlevel: indentationlevel }
    );
    return true;
  }

  @Query(() => ToggleBlock)
  ToggleBlock(@Arg("id") id: number) {
    return ToggleBlock.findOne(id);
  }
}
