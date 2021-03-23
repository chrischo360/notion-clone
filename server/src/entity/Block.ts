import { Entity, PrimaryGeneratedColumn, BaseEntity, Column } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
// import { Page } from "./Page";

@ObjectType()
@Entity("block")
export class Block extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  type: string;

  @Field()
  @Column()
  content: string;
  
  // @Field()
  // @ManyToOne(() => Page, page => page.block)
  // page: Page
}
