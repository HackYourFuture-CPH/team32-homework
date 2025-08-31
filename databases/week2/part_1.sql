INSERT into task (title, description, created, updated, due_date, status_id, user_id)
VALUES ("finish the task", "complete the class task", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, NULL, 1, 4);

UPDATE task SET title = 'complete the task' WHERE id = 37;

UPDATE task set due_date = CURRENT_DATE WHERE id = 37;

UPDATE task set status_id = 2 WHERE id = 37;

update task set status_id = (select id from status where name = 'Done') where id = 36;


DELETE from task where id = 37;