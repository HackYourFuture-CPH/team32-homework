INSERT INTO `Users` (`name`, `email`, `password`, `registration_datetime`) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'password1', '2023-01-01 10:00:00'),
('Bob Smith', 'bob.smith@example.com', 'password2', '2023-01-02 11:00:00'),
('Carol White', 'carol.white@example.com', 'password3', '2023-01-03 12:00:00'),
('David Brown', 'david.brown@example.com', 'password4', '2023-01-04 13:00:00'),
('Eva Green', 'eva.green@example.com', 'password5', '2023-01-05 14:00:00'),
('Frank Black', 'frank.black@example.com', 'password6', '2023-01-06 15:00:00'),
('Grace Lee', 'grace.lee@example.com', 'password7', '2023-01-07 16:00:00'),
('Henry King', 'henry.king@example.com', 'password8', '2023-01-08 17:00:00'),
('Ivy Scott', 'ivy.scott@example.com', 'password9', '2023-01-09 18:00:00'),
('Jackie Adams', 'jackie.adams@example.com', 'password10', '2023-01-10 19:00:00'),
('Kevin Turner', 'kevin.turner@example.com', 'password11', '2023-01-11 20:00:00'),
('Laura Hill', 'laura.hill@example.com', 'password12', '2023-01-12 21:00:00');

INSERT INTO `Posts` (`title`, `content`, `creation_datetime`, `update_datetime`, `author_id`) VALUES
('Post 1', 'Content of post 1', '2023-02-01 10:00:00', '2023-02-01 10:00:00', 1),
('Post 2', 'Content of post 2', '2023-02-02 11:00:00', '2023-02-02 11:00:00', 2),
('Post 3', 'Content of post 3', '2023-02-03 12:00:00', '2023-02-03 12:00:00', 3),
('Post 4', 'Content of post 4', '2023-02-04 13:00:00', '2023-02-04 13:00:00', 4),
('Post 5', 'Content of post 5', '2023-02-05 14:00:00', '2023-02-05 14:00:00', 5),
('Post 6', 'Content of post 6', '2023-02-06 15:00:00', '2023-02-06 15:00:00', 6),
('Post 7', 'Content of post 7', '2023-02-07 16:00:00', '2023-02-07 16:00:00', 7),
('Post 8', 'Content of post 8', '2023-02-08 17:00:00', '2023-02-08 17:00:00', 8),
('Post 9', 'Content of post 9', '2023-02-09 18:00:00', '2023-02-09 18:00:00', 9),
('Post 10', 'Content of post 10', '2023-02-10 19:00:00', '2023-02-10 19:00:00', 10),
('Post 11', 'Content of post 11', '2023-02-11 20:00:00', '2023-02-11 20:00:00', 11),
('Post 12', 'Content of post 12', '2023-02-12 21:00:00', '2023-02-12 21:00:00', 12);

INSERT INTO `Comments` (`content`, `creation_datetime`, `update_datetime`, `author_id`, `post_id`, `parent_comment_id`) VALUES
('Comment 1 on Post 1', '2023-03-01 10:00:00', '2023-03-01 10:00:00', 2, 1, NULL),
('Comment 2 on Post 1', '2023-03-02 11:00:00', '2023-03-02 11:00:00', 3, 1, 1),
('Comment 3 on Post 2', '2023-03-03 12:00:00', '2023-03-03 12:00:00', 4, 2, NULL),
('Comment 4 on Post 2', '2023-03-04 13:00:00', '2023-03-04 13:00:00', 5, 2, 3),
('Comment 5 on Post 3', '2023-03-05 14:00:00', '2023-03-05 14:00:00', 6, 3, NULL),
('Comment 6 on Post 3', '2023-03-06 15:00:00', '2023-03-06 15:00:00', 7, 3, 5),
('Comment 7 on Post 4', '2023-03-07 16:00:00', '2023-03-07 16:00:00', 8, 4, NULL),
('Comment 8 on Post 4', '2023-03-08 17:00:00', '2023-03-08 17:00:00', 9, 4, 7),
('Comment 9 on Post 5', '2023-03-09 18:00:00', '2023-03-09 18:00:00', 10, 5, NULL),
('Comment 10 on Post 5', '2023-03-10 19:00:00', '2023-03-10 19:00:00', 11, 5, 9),
('Comment 11 on Post 6', '2023-03-11 20:00:00', '2023-03-11 20:00:00', 12, 6, NULL),
('Comment 12 on Post 6', '2023-03-12 21:00:00', '2023-03-12 21:00:00', 1, 6, 11);

INSERT INTO `Reactions` (`user_id`, `reaction_type`, `target_id`, `target_type`, `creation_datetime`) VALUES
(1, 'like', 1, 'comment', '2023-04-01 10:00:00'),
(2, 'highfive', 1, 'post', '2023-04-02 11:00:00'),
(3, 'laugh', 2, 'post', '2023-04-03 12:00:00'),
(4, 'cry', 2, 'comment', '2023-04-04 13:00:00'),
(5, 'like', 3, 'post', '2023-04-05 14:00:00'),
(6, 'highfive', 3, 'comment', '2023-04-06 15:00:00'),
(7, 'laugh', 4, 'post', '2023-04-07 16:00:00'),
(8, 'cry', 4, 'post', '2023-04-08 17:00:00'),
(9, 'like', 5, 'comment', '2023-04-09 18:00:00'),
(10, 'highfive', 5, 'post', '2023-04-10 19:00:00'),
(11, 'laugh', 6, 'comment', '2023-04-11 20:00:00'),
(12, 'cry', 6, 'post', '2023-04-12 21:00:00');

INSERT INTO `Friendships` (`user_id`, `friend_id`) VALUES
(1, 2),
(1, 3),
(1, 4),
(2, 3),
(2, 5),
(3, 6),
(4, 7),
(5, 8),
(6, 9),
(7, 10),
(8, 11),
(9, 12);
