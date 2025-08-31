CREATE TABLE `meals` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(100) NOT NULL,
`description` TEXT NOT NULL,
`location` VARCHAR(100) NOT NULL,
`when` DATETIME NOT NULL,
`max_reservations` INT,
`price` DECIMAL(10,2) NOT NULL,
`created_date` DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE `reservations` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`number_of_guests` INT NOT NULL,
`meal_id` INT NOT NULL,
`created_date` DEFAULT CURRENT_TIMESTAMP  NOT NULL,
`contact_phonenumber` VARCHAR(100) NOT NULL,
`contact_name` VARCHAR(100) NOT NULL,
`contact_email` VARCHAR(100),
FOREIGN KEY(`meal_id`) REFERENCES `meals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE `reviews`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`title` VARCHAR(100) NOT NULL,
`description` TEXT NOT NULL,
`meal_id` INT NOT NULL,
`stars` INT NOT NULL ⁠CHECK (stars >= 1 AND stars <= 5),
`created_date` DEFAULT CURRENT_TIMESTAMP NOT NULL,
FOREIGN KEY(`meal_id`) REFERENCES `meals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);

