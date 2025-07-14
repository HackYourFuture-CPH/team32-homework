--Meal Query
--Get all meals
SELECT * from `Meal`;

--Add a new meal
INSERT INTO
    `Meal` (
        `title`,
        `description`,
        `location`,
        `when`,
        `max_reservations`,
        `price`,
        `created_date`
    )
VALUES (
        'Fish curry',
        'Enjoy a variety of homemade fish dishes.',
        'Bangladesh',
        '2025-05-10 19:00:00',
        10,
        50.00,
        '2025-05-4'
    );

--Get a meal with any id, fx 1

SELECT * from `Meal` where id = 3;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal
SET
    title = 'Italian Italian Italian',
    price = 28.50
WHERE
    id = 1;

--Delete a meal with any id, fx 1
DELETE from `Meal` WHERE id = 1;

--Reseervation query
--1.Get all reservations
SELECT * FROM `Reservation`;

--2. Add a new reservation
INSERT INTO
    `Reservation` (
        `number_of_guests`,
        `meal_id`,
        `created_date`,
        `contact_phonenumber`,
        `contact_name`,
        `contact_email`
    )
VALUES (
        4,
        2,
        '2025-06-10',
        '123-456-789000',
        'niger ',
        'ali@example.com'
    );

--3. Get a reservation with any id, fx 1
SELECT * FROM `Reservation` WHERE id = 4;

-- 4. Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Reservation`
set
    contact_email = "aliiiiii@mail.com"
WHERE
    id = 4;

--5. Delete a reservation with any id, fx 1
DELETE from `Reservation` where id = 4;

--Review Query
--1. Get all reviews
SELECT * FROM `Review`;

--2. Add a new review
INSERT INTO
    `Review` (
        `title`,
        `description`,
        `meal_id`,
        `stars`,
        `created_date`
    )
VALUES (
        'Amazing boiled egg',
        'The boiled egg was cooked to perfection.',
        4,
        5,
        '2025-06-20'
    );

--3. Get a review with any id, fx 1
SELECT * from `Review` WHERE id = 1;

--4. Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE `Review` set description = "egg egg egg..." WHERE id = 4;

--5.Delete a review with any id, fx 1
DELETE FROM `Review` WHERE id = 4;

--Additional queries
--1. Get meals that has a price smaller than a specific price fx 90
SELECT * from `Meal` where price < 40;

--2. Get meals that still has available reservations
SELECT
    IFNULL(
        SUM(
            `Reservation`.number_of_guests
        ),
        0
    ) AS number_of_guests,
    `Meal`.max_reservations,
    `Meal`.id AS meal_id,
    `Meal`.title
FROM `Meal`
    LEFT JOIN `Reservation` ON `Meal`.id = `Reservation`.meal_id
GROUP BY
    `Meal`.id
HAVING
    number_of_guests < `Meal`.max_reservations;

--3.Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * from `Meal` where title LIKE("%Rød grød med%");

--4. Get meals that has been created between two dates
SELECT *
from `Meal`
where
    created_date BETWEEN '2024-06-01' and '2024-06-02';

--5. Get only specific number of meals fx return only 3 meals
SELECT * from `Meal` LIMIT 3;

--6.Get the meals that have good reviews
SELECT DISTINCT
    Meal.title
FROM `Meal`
    LEFT JOIN `Review` on `Meal`.id = `Review`.meal_id
WHERE
    stars = 5;

--7.Sort all meals by average number of stars in the reviews