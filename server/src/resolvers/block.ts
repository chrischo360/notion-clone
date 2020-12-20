import { Block } from "../entities/Block";
import { Page } from "../entities/Page";
import { Arg, Mutation, Resolver } from "type-graphql";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Repository } from "typeorm";
import { Query } from "type-graphql";
import { BlockInput } from "./types/BlockInput";

@Resolver(() => Block)
export class BlockResolvers {
  constructor(
    @InjectRepository(Page) private pageRepository: Repository<Page>,
    @InjectRepository(Block) private blockRepository: Repository<Block>
  ) {}

  @Query(() => Block)
  getBlock(@Arg("blockId") blockId: number) {
    return this.blockRepository.findOne(blockId);
  }

  @Query(() => [Block])
  async getAllBlocks(): Promise<Block[]> {
    return this.blockRepository.find();
  }

  @Mutation(() => Block)
  async createBlock(
    @Arg("input") { content, pageId }: BlockInput
  ): Promise<Block> {
    const block = this.blockRepository.create({
      content: content,
      page: { id: pageId },
    });
    this.pageRepository.update({ id: pageId }, { blocks: [block] });

    return await this.blockRepository.save(block);
  }
}
