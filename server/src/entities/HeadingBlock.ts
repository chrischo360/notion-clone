import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Block } from "./Block";

@Entity()
@ObjectType()
export class HeadingBlock extends Block {
  @Field(() => Int)
  @Column()
  boldness: number;
}
