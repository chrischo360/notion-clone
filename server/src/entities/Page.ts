import { ObjectType, Field, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Page extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  cover?: string;

  @Field()
  @Column()
  title?: string;

  @Field()
  @Column()
  emoji?: string;

  @Field(() => User)
  @ManyToOne(() => User)
  creator: User;
  @RelationId((page: Page) => page.creator)
  creatorId: number;
}
// @Field()
// @OneToMany(() => Block, (block) => block.page)
// blocks: Block[];
