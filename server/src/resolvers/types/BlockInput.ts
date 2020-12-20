import { Block, BlockType } from "../../entities/Block";
import { InputType, Field, Int } from "type-graphql";

@InputType()
export class BlockInput implements Partial<Block> {
  @Field()
  content: string;

  @Field()
  pageId: number;
}

@InputType()
export class BlockInputUpdate {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field(() => BlockType, { defaultValue: BlockType.TEXT })
  type: BlockType;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  boldness: number;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  order: number;

  @Field(() => String, { nullable: true, defaultValue: "" })
  pageLink: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  checked: boolean;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  indentationLevel: number;
}
