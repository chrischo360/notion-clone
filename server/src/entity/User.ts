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
  @Column( {unique: true})
  email: string;
  
  @Field()
  @Column()
  password: string;

  @Field()
  @Column({ default: 0 })
  tokenVersion: number;

  @Field()
  @Column({default: ""})
  avatarUrl: string;

  @OneToMany(() => Page, page => page.user)
  pages: Page[];
}
