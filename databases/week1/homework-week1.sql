--1. Find out how many tasks are in the task table
SELECT COUNT(*) as total_tasks FROM task;

--2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(*) as ⁠tasksWithoutDueDate FROM task
WHERE  due_date IS NULL;

--3. Find all the tasks that are marked as done
SELECT * from task
JOIN status as s
ON s.id = task.status_id
WHERE s.name='done';

--4. Find all the tasks that are not marked as done
 SELECT * FROM task t
 JOIN status s
 ON s.id = t.status_id
 WHERE s.name !='done' 

 --5. Get all the tasks, sorted with the most recently created first
 SELECT * from task
 ORDER BY created DESC;

 --6. Get the single most recently created task
 SELECT * from task
 ORDER BY created DESC
 LIMIT 1;

 --7.Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task
WHERE title LIKE '%database%' OR description LIKE '%database%';

--8. Get the title and status (as text) of all tasks
SELECT task.title, status.name as status FROM task
JOIN status 
ON status.id = task.status_id ;

--9. Get the name of each status, along with a count of how many tasks have that status
SELECT  status.name as status,COUNT(task.id) as numberOfTasks   FROM task
RIGHT JOIN status 
ON status.id = task.status_id
GROUP BY status.name;

--10. Get the names of all statuses, sorted by the status with most tasks first

SELECT status.name as status, COUNT(task.id) as numberOfTasks  FROM task
RIGHT JOIN status 
ON status.id = task.status_id
GROUP BY status.name 
ORDER BY numberOfTasks DESC;