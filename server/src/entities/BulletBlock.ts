import { ObjectType } from "type-graphql";
import { Entity } from "typeorm";
import { Block } from "./Block";

@Entity()
@ObjectType()
export class BulletBlock extends Block {}
