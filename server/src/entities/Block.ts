import { Field, Int, ObjectType, registerEnumType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Page } from "./Page";

export enum BlockType {
  TEXT = "text",
  HEADING = "heading",
  PAGE = "page",
  BULLET = "block",
  NUMBERED = "numbered",
  TODO = "todo",
  TOGGLE = "toggle",
}

registerEnumType(BlockType, {
  name: "BlockType",
  description: "The basic block types",
});

@ObjectType()
@Entity()
export class Block {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  content: string;

  @Field(() => BlockType, { defaultValue: BlockType.TEXT })
  @Column({ type: "enum", enum: BlockType, default: BlockType.TEXT })
  type: BlockType;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @Column({ default: 1 })
  boldness: number;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @Column({ default: 1 })
  order: number;

  @Field(() => String, { nullable: true })
  @Column({ default: "" })
  pageLink: string;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  checked: boolean;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @Column({ default: 1 })
  indentationLevel: number;

  @Field()
  @ManyToOne(() => Page, (page) => page.blocks, { cascade: true })
  page: Page;
}
