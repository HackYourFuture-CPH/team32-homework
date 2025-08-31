CREATE TABLE `Users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `registration_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `Posts` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `creation_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_datetime` TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `author_id` INT NOT NULL,
    FOREIGN KEY (`author_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `Comments` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `content` TEXT NOT NULL,
    `creation_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `update_datetime` TIMESTAMP DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    `author_id` INT NOT NULL,
    `post_id` INT NOT NULL,
    `parent_comment_id` INT,
    FOREIGN KEY (`author_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
    FOREIGN KEY (`post_id`) REFERENCES `Posts`(`id`) ON DELETE CASCADE
    FOREIGN KEY (`parent_comment_id`) REFERENCES `Comments`(`id`) ON DELETE CASCADE
);

CREATE TABLE `Reactions` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `reaction_type` VARCHAR(50) NOT NULL,
    `target_id` INT NOT NULL,
    `target_type` VARCHAR(20) NOT NULL,
    `creation_datetime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
    CHECK (`reaction_type` IN ('like', 'highfive', 'laugh', 'cry')),
    CHECK (`target_type` IN ('post', 'comment')),
    UNIQUE (`user_id`, `reaction_type`, `target_id`, `target_type`)
);


CREATE TABLE `Friendships` (
    `user_id` INT NOT NULL,
    `friend_id` INT NOT NULL,
    CHECK (`user_id` < `friend_id`),
    PRIMARY KEY (`user_id`, `friend_id`),
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`),
    FOREIGN KEY (`friend_id`) REFERENCES `Users`(`id`)
);