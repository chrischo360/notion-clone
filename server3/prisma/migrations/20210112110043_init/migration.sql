/*
  Warnings:

  - You are about to alter the column `type` on the `block` table. The data in that column could be lost. The data in that column will be cast from `String` to `Enum("Block_type")`.

*/
-- DropForeignKey
ALTER TABLE `block` DROP FOREIGN KEY `block_ibfk_1`;

-- DropForeignKey
ALTER TABLE `page` DROP FOREIGN KEY `page_ibfk_1`;

-- AlterTable
ALTER TABLE `block` MODIFY `type` ENUM('TEXT', 'HEADING', 'PAGE', 'BULLET', 'NUMBERED', 'TODO', 'TOGGLE') NOT NULL DEFAULT 'TEXT';

-- AddForeignKey
ALTER TABLE `Block` ADD FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Page` ADD FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
