DROP DATABASE IF EXISTS wei_care;
CREATE DATABASE wei_care;


USE wei_care;

DROP TABLE IF EXISTS DAYLIES, TEACHERS, PARENTS, STUDENTS, STUDENTPARENT, CLASSES;

CREATE TABLE TEACHERS
(
TeacherID			INT 								PRIMARY KEY			AUTO_INCREMENT,
FirstName			VARCHAR(30),
LastName			VARCHAR(30),
Email				VARCHAR(30),										
Phone				VARCHAR(15),
UserName			VARCHAR(30),
TeacherPassword		VARCHAR(30)							UNIQUE
);


CREATE TABLE CLASSES
(
ClassID 			INT									PRIMARY KEY			AUTO_INCREMENT,
TeacherID			INT,
Classroom			CHAR(10),
CONSTRAINT 			TeacherIDFK 			FOREIGN KEY(TeacherID)
											REFERENCES TEACHERS(TeacherID)
                                            ON DELETE NO ACTION
											ON UPDATE CASCADE
);


CREATE TABLE DAYLIES
(
DailyID				INT 								PRIMARY KEY			AUTO_INCREMENT,
TeacherID			INT,
Title				VARCHAR(30),
DailyDate			INT,										
DailyText			VARCHAR(400),
CONSTRAINT 			DaylyTeacherIDFK 			FOREIGN KEY(TeacherID)
											REFERENCES TEACHERS(TeacherID)
                                            ON DELETE NO ACTION
											ON UPDATE CASCADE
);


CREATE TABLE STUDENTS
(
StudentID			INT 								PRIMARY KEY			AUTO_INCREMENT,
ClassID				INT,
FirstName			VARCHAR(30),
LastName			VARCHAR(30),
CONSTRAINT 			ClassIDFK 				FOREIGN KEY(ClassID)
											REFERENCES CLASSES(ClassID)
											ON UPDATE CASCADE
                                            
/*CONSTRAINT 			ParentIDFK 				FOREIGN KEY(ParentID)
											REFERENCES PARENTS(ParentID)
											ON DELETE CASCADE*/
);

CREATE TABLE PARENTS
(
ParentID			INT 								PRIMARY KEY			AUTO_INCREMENT,
FirstName			VARCHAR(30),
LastName			VARCHAR(30),
Email				VARCHAR(100),										
Phone				VARCHAR(15),
UserName			VARCHAR(30),
ParentPassword		VARCHAR(30)							UNIQUE
);

CREATE TABLE STUDENTPARENT
(
ParentID			INT,
StudentID			INT,
Relationship		CHAR(15),

CONSTRAINT 			ParentChildPK			PRIMARY KEY(ParentID, StudentID),

CONSTRAINT 			StudentIDFK 			FOREIGN KEY(StudentID)
											REFERENCES STUDENTS(StudentID)
											ON UPDATE CASCADE,
                                            
CONSTRAINT 			SParentIDFK 			FOREIGN KEY(ParentID)
											REFERENCES PARENTS(ParentID)
											ON DELETE CASCADE

);


INSERT INTO TEACHERS 
(FirstName, LastName, Email, Phone, UserName, TeacherPassword)
VALUES
('Bobby', 'Mcgee', 'robertmcGee2120@fakemail.com', '(206) 555-7892', 'mcgeeb', 'pass1'),
('Anne', 'Sullivan', 'sully@fakemail.com', '(206) 555-6471', 'sullivana', 'pass2'),
('Florence', 'Nightengale', 'flo@fakemail.com', '(206) 555-2222','nightegalef', 'pass3');


INSERT INTO DAYLIES 
(Title, TeacherID, DailyDate, DailyText)
VALUES
("Friday Fun", 1, unix_timestamp('2018-11-11 01:23:00') + (86400 * 47),
"metus blandit erat, in feugiat diam quam non magna. Phasellus eleifend nisl quis mi scelerisque aliquam. "),

("SCIENCE", 1, unix_timestamp('2018-10-15 01:10:00') + (86400 * 48),
"rhoncus eros. Nunc vulputate nisi molestie, ultricies metus eu, volutpat justo. Praesent id sodales neque.
 Mauris ultricies et elit id ornare. Vestibulum est tellus, lacinia a eros vel, interdum"),

("Welcome Back", 2, unix_timestamp('2018-01-09 01:05:00') + (86400 * 49),
"Vivamus nec auctor elit. Integer mattis venenatis fringilla. Quisque tempus diam sit amet mattis 
commodo. Phasellus volutpat diam vestibulum, tristique metus non, pharetra eros. Aliquam nec leo eleifend,
congue nisl varius, suscipit elit");


INSERT INTO CLASSES
(TeacherID, Classroom)
Values
(1, 'red'),
(2, 'blue');

INSERT INTO STUDENTS 
(ClassID, FirstName, LastName)
VALUES
(1, 'Kevin', 'McAllister'),
(2, 'Buzz', 'McAllister'),
(1, 'Charlie', 'Brown'),
(1, 'Eli', 'Manning'),
(2, 'Peyton', 'Manning');


INSERT INTO PARENTS 
(FirstName, LastName, Email, Phone, UserName, ParentPassword)
VALUES
('Peter', 'McAllister', 'petermcallister1955@fakemail.com', '(206) 555-7999', 'mcallisterp', 'pass1'),
('Kate', 'McAllister', 'katemcallister1955@fakemail.com', '(206) 555-7999', 'mcallisterk', 'pass2'),
('MwaMwa', 'Brown', 'mwamwa@fakemail.com', '(206) 555-2189', 'brownm', 'pass3'),
('Archie', 'Manning', 'archiemanning@fakemail.com', '(206) 555-6789', 'manninga', 'pass4');

INSERT INTO STUDENTPARENT 
(ParentID, StudentID, Relationship)
VALUES
(1, 1, 'father'),
(2, 1, 'mother'),
(1, 2, 'father'),
(2, 2, 'mother'),
(3, 3, 'mother'),
(4, 4, 'father'),
(4, 5, 'father');
