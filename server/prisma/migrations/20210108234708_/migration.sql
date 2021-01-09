-- CreateTable
CREATE TABLE `Dev` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `Age` INT NOT NULL,
    `linkedin` VARCHAR(191) NOT NULL,
    `csharp` BOOLEAN NOT NULL,
    `javascript` BOOLEAN NOT NULL,
    `node` BOOLEAN NOT NULL,
    `angular` BOOLEAN NOT NULL,
    `react` BOOLEAN NOT NULL,
    `ionic` BOOLEAN NOT NULL,
    `mensageria` BOOLEAN NOT NULL,
    `php` BOOLEAN NOT NULL,
    `lavarel` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
