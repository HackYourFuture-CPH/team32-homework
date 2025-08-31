-- Active: 1744484448806@@127.0.0.1@3306@mealsharing


/* Meals */

/* Get all meals */
SELECT * FROM meals;
/* Add a new meal */
INSERT INTO `meals` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES
('French Cheese Tasting', 'Experience a variety of French cheeses paired with wines.', 'Paris', '2024-07-22 19:30:00', 15, 35.00, '2024-06-04');

/* Get a meal with any id, fx 1 */
SELECT * from meals
WHERE `id` = 2;

/* Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE meals set `location` = 'Budapest' 
WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM meals) AS temp);

/* Delete a meal with any id, fx 1 */
DELETE FROM meals
WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM meals) AS temp);

/* Reservations */

/* Get all reservations */
SELECT * FROM reservations;

/* Add a new reservation */
INSERT INTO `reservations` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(3, 1, '2024-06-13', '456-789-0123', 'David Green', 'david@example.com');

/* Get a reservation with any id, fx 1 */
select * from reservations
where id = 7;

/* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE reservations
SET number_of_guests = 4
WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM reservations) AS temp);

/* Delete a reservation with any id, fx 1 */
DELETE FROM reservations
WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM reservations) AS temp);

/* Reviews */

/* Get all reviews */
SELECT * from reviews;

/* Add a new review */
INSERT INTO `reviews` (`title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
('Amazing Pasta', 'The pasta was cooked to perfection and the sauce was delicious.', 1, 5, '2024-06-20');

/* Get a review with any id, fx 1 */
select title, description from reviews
where id = (SELECT  MAX(id) from reviews);

/* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes */
update reviews set title = 'Nice pasta, liked it'
WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM reviews) AS temp);

/* Delete a review with any id, fx 1 */
DELETE FROM reviews WHERE id = (SELECT id FROM (SELECT MAX(id) AS id FROM reviews) AS temp);

/* Additional queries */

/* Get meals that has a price smaller than a specific price fx 90 */
SELECT * FROM meals
where price < 30;

/* Get meals that still has available reservations */
SELECT title, max_reservations, count(reservations.number_of_guests) as reserved 
from meals
LEFT JOIN reservations on meals.id = reservations.meal_id
GROUP BY title, max_reservations
HAVING reserved < max_reservations;

/* Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde */
SELECT title
FROM meals
WHERE title LIKE '%Delight%';

/* Get meals that has been created between two dates */
SELECT title, created_date
from meals
WHERE created_date BETWEEN '2024-06-01' AND '2024-06-06';

/* Get only specific number of meals fx return only 5 meals */
SELECT title
FROM meals
LIMIT 5;

/* Get the meals that have good reviews */
select DISTINCT meals.title, reviews.stars
from meals
left join reviews on meals.id = reviews.meal_id
where reviews.stars BETWEEN 4 AND 5;

/* Get reservations for a specific meal sorted by created_date */
select meals.id, reservations.created_date, contact_phonenumber,contact_name,contact_email
from meals
left join reservations on meals.id = reservations.meal_id
where meals.id = 1
ORDER BY reservations.created_date;

/* Sort all meals by average number of stars in the reviews */
SELECT AVG(reviews.stars) as average_rating, meals.title, meals.description,meals.location
from meals
left join reviews on meals.id = reviews.meal_id
GROUP BY meals.title,meals.description ,meals.location
ORDER BY average_rating DESC;