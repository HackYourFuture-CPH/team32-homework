USE MealDb;

DROP TABLE `Meal`;
CREATE table Meal (
      `id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      `title` VARCHAR(25) NOT NULL UNIQUE,
      `description` TEXT,
      `location` VARCHAR(100) NOT NULL,
      `when` DATETIME,
      `max_reservations` int(10),
      `price` DECIMAL(5, 2),
      `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP

);

CREATE table Reservation (
      `id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      `number_of_guests` int,
      `meal_id` int,
      `created_date` DATE,
      `contact_phonenumber` VARCHAR(20),
      `contact_name` VARCHAR(50),
      `contact_email` VARCHAR(100)
);

CREATE table Review (
      `id` int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      `title` VARCHAR(25),
      `description` TEXT,
      `meal_id` int,
      `when` DATETIME,
      `stars` int,
      `created_date` DATE

);

INSERT INTO `Meal` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES
('Italian Pasta Night', 'Enjoy a variety of homemade pasta dishes.', 'Rome', '2024-07-15 19:00:00', 10, 25.00, '2024-06-01'),
('Sushi Evening', 'Fresh sushi prepared by a professional chef.', 'Tokyo', '2024-07-20 18:30:00', 8, 40.00, '2024-06-02'),
('Vegan Delight', 'A selection of delicious vegan meals.', 'Berlin', '2024-07-18 20:00:00', 12, 30.00, '2024-06-03');

INSERT INTO `Reservation` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(2, 1, '2024-06-10', '123-456-7890', 'Alice Johnson', 'alice@example.com'),
(4, 2, '2024-06-11', '234-567-8901', 'Bob Smith', 'bob@example.com'),
(1, 3, '2024-06-12', '345-678-9012', 'Carol White', 'carol@example.com');

INSERT INTO `Review` (`title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
('Amazing Pasta', 'The pasta was cooked to perfection and the sauce was delicious.', 1, 5, '2024-06-20'),
('Fresh Sushi', 'The sushi was fresh and beautifully presented.', 2, 4, '2024-06-21'),
('Great Vegan Options', 'Loved the variety and taste of the vegan dishes.', 3, 5, '2024-06-22');