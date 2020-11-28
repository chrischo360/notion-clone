import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Block } from "./Block";

@Entity()
@ObjectType()
export class TodoBlock extends Block {
  @Field(() => Boolean)
  @Column({ default: false })
  checked: boolean;
}
