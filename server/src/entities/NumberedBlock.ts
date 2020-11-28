import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Block } from "./Block";

@Entity()
@ObjectType()
export class NumberedBlock extends Block {
  @Field(() => Int)
  @Column()
  order: number;
}
