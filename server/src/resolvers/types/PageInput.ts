import { Page } from "../../entities/Page";
import { Field, ID, InputType } from "type-graphql";

@InputType()
export class PageInput implements Partial<Page> {
  @Field({ defaultValue: "" })
  cover?: string;

  @Field({ defaultValue: "" })
  title?: string;

  @Field({ defaultValue: "" })
  emoji?: string;
}

@InputType()
export class PageUpdateInput implements Partial<Page> {
  @Field(() => ID)
  id: number;

  @Field({ defaultValue: "" })
  cover?: string;

  @Field({ defaultValue: "" })
  title?: string;

  @Field({ defaultValue: "" })
  emoji?: string;
}
