import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { BulletBlock } from "../entities/BulletBlock";

@InputType()
class BulletBlockInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;
}

@Resolver()
export class BulletBlockResolver {
  @Mutation(() => BulletBlock)
  async createTextBlock(@Arg("content") content: string): Promise<BulletBlock> {
    const bulletBlock = await BulletBlock.create({ content }).save();

    return bulletBlock;
  }

  @Mutation(() => Boolean)
  async updateBulletBlock(
    @Arg("input") { id, content }: BulletBlockInput
  ): Promise<Boolean> {
    await BulletBlock.update({ id: id }, { content: content });
    return true;
  }

  @Query(() => BulletBlock)
  BulletBlock(@Arg("id") id: number) {
    return BulletBlock.findOne(id);
  }
}
