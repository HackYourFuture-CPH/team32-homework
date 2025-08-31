CREATE TABLE `teachers`(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(100),
`specialty` VARCHAR(100)
);

CREATE TABLE `students` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `age` int NOT NULL,
    `teacher_id` int,
    FOREIGN KEY(`teacher_id`) REFERENCES `teachers`(`id`)
);

CREATE TABLE `courses` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `duration(months)` int
);

CREATE TABLE `student_courses` (
    `student_id` INT,
    `course_id` INT,
    PRIMARY KEY (`student_id`, `course_id`),
    FOREIGN KEY (`student_id`) REFERENCES `students`(`id`),
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`)
);

CREATE TABLE `teacher_courses` (
    `teacher_id` INT,
    `course_id` INT,
    PRIMARY KEY (`teacher_id`, `course_id`),
    FOREIGN KEY (`teacher_id`) REFERENCES `students`(`id`),
    FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`)
);

