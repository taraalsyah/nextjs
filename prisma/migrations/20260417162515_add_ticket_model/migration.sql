-- CreateTable
CREATE TABLE `Ticket` (
    `id` VARCHAR(191) NOT NULL,
    `ticketCode` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `requestor` VARCHAR(191) NOT NULL,
    `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN',
    `priority` ENUM('HIGH', 'MEDIUM', 'LOW') NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `assignTo` VARCHAR(191) NOT NULL DEFAULT 'Unassigned',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `description` VARCHAR(191) NOT NULL,
    `attachment` VARCHAR(191) NULL,

    UNIQUE INDEX `Ticket_ticketCode_key`(`ticketCode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
