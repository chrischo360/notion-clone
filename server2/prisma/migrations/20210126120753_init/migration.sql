-- CreateTable
CREATE TABLE `Block` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(191) NOT NULL DEFAULT '',
    `type` ENUM('TEXT', 'HEADING', 'PAGE', 'BULLET', 'NUMBERED', 'TODO', 'TOGGLE') NOT NULL DEFAULT 'TEXT',
    `pageId` INT NOT NULL,
INDEX `pageId`(`pageId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Page` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cover` VARCHAR(191) DEFAULT '',
    `title` VARCHAR(191) NOT NULL,
    `emoji` VARCHAR(191) DEFAULT '',
    `creatorId` INT NOT NULL,
INDEX `creatorId`(`creatorId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL DEFAULT '',
    `tokenVersion` INT NOT NULL DEFAULT 0,
UNIQUE INDEX `User.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Block` ADD FOREIGN KEY (`pageId`) REFERENCES `Page`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Page` ADD FOREIGN KEY (`creatorId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
