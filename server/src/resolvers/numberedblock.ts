import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { NumberedBlock } from "../entities/NumberedBlock";

@InputType()
class NumberedBlockInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Int, { defaultValue: 1 })
  order: number;
}

@Resolver()
export class NumberedBlockResolver {
  @Mutation(() => NumberedBlock)
  async createTextBlock(
    @Arg("content") content: string
  ): Promise<NumberedBlock> {
    const numberedBlock = await NumberedBlock.create({ content }).save();

    return numberedBlock;
  }

  @Mutation(() => Boolean)
  async updateNumberedBlock(
    @Arg("input") { id, content, order }: NumberedBlockInput
  ): Promise<Boolean> {
    await NumberedBlock.update({ id: id }, { content: content, order: order });
    return true;
  }

  @Query(() => NumberedBlock)
  NumberedBlock(@Arg("id") id: number) {
    return NumberedBlock.findOne(id);
  }
}
