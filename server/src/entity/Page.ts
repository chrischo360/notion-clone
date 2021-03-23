import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, RelationId } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { User } from "./User";
// import { Block } from "./Block";

@ObjectType()
@Entity("page")
export class Page extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  cover: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  pageUrl: string;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;
  @Column()
  @RelationId((page: Page) => page.user)
  userId: number

  // @OneToMany(() => Block, block => block.page)
  // block: Block
}
