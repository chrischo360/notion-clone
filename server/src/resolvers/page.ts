import { Page } from "../entities/Page";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PageInput, PageUpdateInput } from "./types/PageInput";

@Resolver(() => Page)
export class PageResolver {
  constructor(
    @InjectRepository(Page) private pageRepository: Repository<Page>
  ) {}

  @Query(() => Page)
  getPage(@Arg("pageId") pageId: number) {
    return this.pageRepository.findOne(pageId);
  }

  @Query(() => [Page])
  async getAllPages(): Promise<Page[]> {
    return this.pageRepository.find();
  }

  @Mutation(() => Page)
  async createPage(@Arg("input") pageInput: PageInput): Promise<Page> {
    const page = this.pageRepository.create(pageInput);

    return await this.pageRepository.save(page);
  }

  @Mutation(() => Boolean)
  async updatePage(
    @Arg("input") pageInputUpdate: PageUpdateInput
  ): Promise<Boolean> {
    await this.pageRepository.update(
      { id: pageInputUpdate.id },
      {
        cover: pageInputUpdate.cover,
        title: pageInputUpdate.title,
        emoji: pageInputUpdate.emoji,
      }
    );

    return true;
  }
}
