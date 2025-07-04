--1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES('Do homework','database week 2 homework', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 1, 1);
SELECT * from task;


--2.Change the title of a task
UPDATE task
SET title = 'New homework'
WHERE id = 1;

UPDATE task set title = "whatever your title" where id = (select id from task ORDER BY id DESC LIMIT 1);

 --3.Change a task due date
UPDATE task
set due_date = '2025-12-24'
WHERE id = 38;
select * FROM task where id =38;

--4.Change a task status
UPDATE task set status_id = 2 where id = 38;
UPDATE task set status_id = (SELECT id from status WHERE name = 'Done') WHERE id = 38;

--5.Mark a task as complete
update task set status_id = (SELECT id from status where name = 'Done') where id = 38;
--6.Delete a task
delete from task where id = 36;