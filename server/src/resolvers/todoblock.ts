import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { TodoBlock } from "../entities/TodoBlock";

@InputType()
class UpdateTodoInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  content: string;

  @Field(() => Boolean, { defaultValue: false })
  checked: boolean;
}

@Resolver()
export class TodoBlockResolver {
  @Mutation(() => TodoBlock)
  async createTodoBlock(@Arg("content") content: string): Promise<TodoBlock> {
    const todoBlock = await TodoBlock.create({ content }).save();

    return todoBlock;
  }

  @Mutation(() => Boolean)
  async updateTodoBlock(
    @Arg("input") { id, content, checked }: UpdateTodoInput
  ): Promise<Boolean> {
    await TodoBlock.update({ id: id }, { checked: checked, content: content });

    return true;
  }

  @Query(() => TodoBlock)
  todoBlock(@Arg("id") id: number) {
    return TodoBlock.findOne(id);
  }
}
