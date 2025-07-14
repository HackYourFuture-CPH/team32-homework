CREATE DATABASE HYF_Social_Media;
USE HYF_Social_Media;
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  registration_datetime DATETIME
);

CREATE TABLE Post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150),
  content TEXT,
  creation_datetime DATETIME,
  update_datetime DATETIME,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE Comment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT,
  creation_datetime DATETIME,
  update_datetime DATETIME,
  user_id INT,
  post_id INT,
  parent_comment_id INT DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (post_id) REFERENCES Post(id),
  FOREIGN KEY (parent_comment_id) REFERENCES Comment(id)
);

CREATE TABLE Reaction (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('like', 'highfive', 'laugh', 'cry'),
  creation_datetime DATETIME,
  user_id INT,
  post_id INT,
  FOREIGN KEY (user_id) REFERENCES User(id),
  FOREIGN KEY (post_id) REFERENCES Post(id)
);

INSERT INTO User (name, email, password, registration_datetime) VALUES
('Alice Johnson', 'alice@example.com', 'hashed_password_1', '2024-05-01 10:30:00'),
('Bob Smith', 'bob@example.com', 'hashed_password_2', '2024-05-02 11:15:00'),
('Carol White', 'carol@example.com', 'hashed_password_3', '2024-05-03 09:45:00'),
('David Lee', 'david@example.com', 'hashed_password_4', '2024-05-04 14:20:00'),
('Eve Martin', 'eve@example.com', 'hashed_password_5', '2024-05-05 16:00:00');



INSERT INTO Post (title, content, creation_datetime, update_datetime, user_id) VALUES
('Welcome to the Blog', 'This is our very first post!', '2024-05-01 09:00:00', '2024-05-01 09:00:00', 1),
('Tips for Healthy Eating', 'Eat more greens and fewer processed foods.', '2024-05-02 10:30:00', '2024-05-02 11:00:00', 2),
('Traveling to Japan', 'Japan is beautiful in the spring with cherry blossoms.', '2024-05-03 14:00:00', '2024-05-03 15:00:00', 3),
('Learning SQL Basics', 'Let’s dive into basic SQL commands.', '2024-05-04 12:00:00', '2024-05-04 12:30:00', 4),
('The Power of Reading', 'Reading daily improves your focus and knowledge.', '2024-05-05 08:45:00', '2024-05-05 09:15:00', 5);

INSERT INTO Comment (content, creation_datetime, update_datetime, user_id, post_id, parent_comment_id) VALUES
('Great post! Very informative.', '2024-05-06 09:00:00', '2024-05-06 09:00:00', 2, 16, NULL),
('Thanks! Glad you liked it.', '2024-05-06 09:10:00', '2024-05-06 09:10:00', 1, 17, 1),
('Interesting tips, I’ll try them.', '2024-05-06 10:00:00', '2024-05-06 10:00:00', 3, 18, NULL),
('Where in Japan did you go?', '2024-05-06 10:30:00', '2024-05-06 10:30:00', 4, 20, NULL),
('Kyoto and Tokyo mostly.', '2024-05-06 10:45:00', '2024-05-06 10:45:00', 3, 19, 4);

INSERT INTO Reaction (type, creation_datetime, user_id, post_id) VALUES
('like', '2024-05-06 11:00:00', 1, 16),
('laugh', '2024-05-06 11:05:00', 2, 17),
('highfive', '2024-05-06 11:10:00', 3, 18),
('cry', '2024-05-06 11:15:00', 4, 19),
('like', '2024-05-06 11:20:00', 5, 22);

