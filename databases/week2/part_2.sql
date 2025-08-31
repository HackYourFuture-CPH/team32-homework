CREATE DATABASE schooldb
    DEFAULT CHARACTER SET = 'utf8mb4';
 /* sql queries */
   CREATE TABLE classes (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(255) NOT NULL,
    `begins` DATE,
    `ends` DATE
    );
    CREATE TABLE students (
    `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phone` varchar(255) NULL,
    `class_id` int(10) unsigned NOT NULL, 
    PRIMARY KEY(`id`),
    FOREIGN KEY(`class_id`) REFERENCES `classes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
    );

    INSERT INTO classes (id, name) values (1, 'Maths');
    INSERT INTO classes (id, name) values (2, 'IT');
    INSERT INTO classes (id, name) values (3, 'Engineering');

    INSERT INTO students (id, name, email, phone, class_id) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795', 1);
    INSERT INTO students (id, name, email, phone, class_id) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467', 2);
    INSERT INTO students (id, name, email, phone, class_id) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683', 1);
    INSERT INTO students (id, name, email, phone, class_id) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191', 3);
    INSERT INTO students (id, name, email, phone, class_id) values (5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931', 3);
    INSERT INTO students (id, name, email, phone, class_id) values (6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');

CREATE INDEX name_index
ON students(name);


ALTER TABLE classes
ADD status ENUM('Not-started', 'Ongoing', 'Finished') DEFAULT 'Not-started';