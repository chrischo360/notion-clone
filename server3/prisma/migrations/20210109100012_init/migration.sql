-- DropForeignKey
ALTER TABLE `block` DROP FOREIGN KEY `block_ibfk_1`;

-- DropForeignKey
ALTER TABLE `page` DROP FOREIGN KEY `page_ibfk_1`;

-- AlterTable
ALTER TABLE `page` MODIFY `cover` VARCHAR(191),
    MODIFY `emoji` VARCHAR(191);

-- AlterTable
ALTER TABLE `user` MODIFY `confirmed` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Block` ADD FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Page` ADD FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
