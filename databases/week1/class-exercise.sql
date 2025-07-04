--class excercise
--1. Select the names and phones of all users;
SELECT name, phone
FROM user;

--2.Select the name of the user with id=10;
SELECT name
 FROM user
WHERE id=10;

--3.Find how many users exist in the database;
SELECT COUNT(*) from `user`;

--4. Select the names of the first 5 users in the database;
SELECT name FROM `user`
limit 5

--5. Select the names of the last 3 users in the database;
SELECT name FROM `user`
ORDER BY id DESC LIMIT 3;

--6. Sum all the ids in the user table;
SELECT SUM(id) FROM `user`;

--7.Select all users and order them alphabetically by name;
SELECT * FROM user
ORDER BY name ASC;

--8. Find all tasks that include SQL either on the title or on the description;
SELECT * FROM task
WHERE title LIKE "%SQL%" OR DESCRIPTION like "%SQL%";

--9. Find the title of all tasks that the user Maryrose is responsible for;
SELECT task.title, user.name from task
JOIN user ON task.user_id = user.id WHERE user.name LIKE "%Maryrose%";


--10.Find how many tasks each user is responsible for;
SELECT name, COUNT(task.id) as total_tasks from user LEFT join task ON user.id = task.user_id GROUP BY user.name;

--11. Find how many tasks with a status=Done each user is responsible for;
SELECT user.name, COUNT(task.id) as total_task, status.name as status_name 
FROM `user`
LEFT JOIN task ON user.id = task.user_id
join status on task.status_id = status.id
WHERE status.name = "Done" GROUP BY user.name;