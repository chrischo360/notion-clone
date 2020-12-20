import { ObjectType, Field, ID } from "type-graphql";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Block } from "./Block";

@ObjectType()
@Entity()
export class Page {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ defaultValue: "" })
  @Column({ default: "" })
  cover?: string;

  @Field({ defaultValue: "" })
  @Column({ default: "" })
  title?: string;

  @Field({ defaultValue: "" })
  @Column({ default: "" })
  emoji?: string;

  @Field(() => [Block], { nullable: true })
  @OneToMany(() => Block, (block) => block.page)
  blocks: Block[];
}
