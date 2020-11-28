import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Block } from "./Block";

@Entity()
@ObjectType()
export class PageBlock extends Block {
  @Field(() => String)
  @Column()
  pagelink: string;
}
