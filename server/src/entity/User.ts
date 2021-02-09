import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";
import { Page } from "./Page";

@ObjectType()
@Entity("user")
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  email: string;
  
  @Field()
  @Column("text")
  password: string;

  @Field()
  @Column("int", { default: 0 })
  tokenVersion: number;

  @OneToMany(() => Page, page => page.user)
  page: Page;
}
