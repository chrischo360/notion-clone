/*
  Warnings:

  - Made the column `content` on table `block` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `name` on table `user` required. The migration will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `block` DROP FOREIGN KEY `block_ibfk_1`;

-- DropForeignKey
ALTER TABLE `page` DROP FOREIGN KEY `page_ibfk_1`;

-- AlterTable
ALTER TABLE `block` ADD COLUMN     `type` VARCHAR(191) NOT NULL DEFAULT 'TEXT',
    MODIFY `content` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `page` MODIFY `cover` VARCHAR(191) DEFAULT '',
    MODIFY `emoji` VARCHAR(191) DEFAULT '';

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Block` ADD FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Page` ADD FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
