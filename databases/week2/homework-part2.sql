--Part 2: School database
--1. Create a new database containing the following tables:
--Class: with the columns: id, name, begins (date), ends (date)
--Student: with the columns: id, name, email, phone, class_id (foreign key)

CREATE DATABASE School;
USE School;

CREATE TABLE Class (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
start_date DATE,
end_date DATE,
PRIMARY KEY (id)
);

create table Student (
    class_id int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(50),
    email VARCHAR(100), 
    phone INT, 
    Foreign Key (class_id) REFERENCES Class(id ));

--If you are done with the above tasks, you can continue with these advanced tasks
--1. Create an index on the name column of the student table.
 SELECT * from Student
 CREATE INDEX myIndex
 on Student (name);

use School;
 --Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
 ALTER TABLE Class
ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'ongoing';
SELECT * FROM `Class`;