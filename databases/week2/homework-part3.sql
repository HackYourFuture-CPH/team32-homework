CREATE DATABASE hyf_lesson2
    DEFAULT CHARACTER SET = 'utf8mb4';
    --1. Get all the tasks assigned to users whose email ends in @spotify.com
    SELECT t.* from task t
    join user u ON u.id = t.id
    WHERE u.email LIKE '%@spotify.com';

 --2. Get all the tasks for 'Donald Duck' with status 'Not started'
select t.*, u.name, s.name  from task t
join user_task ut on  ut.task_id = t.id 
join user u on u.id = ut.user_id
JOIN status s on s.id = t.status_id
where u.name = 'Donald Duck' and s.name ='Not started';


--3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT t.*from task t
join user_task ut on t.id = ut.task_id
join user u on u.id = ut.user_id
WHERE u.name = 'Maryrose Meadows' and  month(t.created) = 09;


--4. Find how many tasks where created in each month,
-- e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT count(*) as number_of_tasks, month(task.created) as month  from task
GROUP BY month(created);