SELECT title, user.email
 FROM task
 LEFT JOIN user on task.user_id = user.id
 WHERE user.email LIKE '%@spotify.com';

 SELECT title
 FROM task
 LEFT JOIN status on task.status_id = status.id
 LEFT JOIN user on task.user_id = user.id
 WHERE user.name = 'Donald Duck' AND status.name = 'Done';

 SELECT title
 FROM task
 LEFT JOIN user on task.user_id = user.id
 WHERE user.name = 'Maryrose Meadows' AND month(created) = 9;

 SELECT COUNT(*)
 FROM task
GROUP BY month(created);

