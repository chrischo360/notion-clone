import { Entity, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, OneToMany, RelationId } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { User } from "./User";
import { Block } from "./Block";

@ObjectType()
@Entity("page")
export class Page extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

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
  pageUrl: string;

  @Field(() => User)
  @ManyToOne(() => User
  // , user => user.page
  )
  user: User;
  @Column()
  @RelationId((page: Page) => page.user)
  userId: number

  // @Field(() => User)
  // @ManyToOne(() => User, user => user.pages)
  // user: User

  @OneToMany(() => Block, block => block.page)
  block: Block
}
