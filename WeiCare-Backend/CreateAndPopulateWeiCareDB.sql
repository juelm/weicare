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
`Password`		    VARCHAR(30)							UNIQUE,
UserType            VARCHAR(30)
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
DailyID				INT 					PRIMARY KEY			AUTO_INCREMENT,
ClassID				INT,
Title				VARCHAR(30),
DailyDate			TIMESTAMP				DEFAULT CURRENT_TIMESTAMP,										
DailyText			VARCHAR(400),
CONSTRAINT 			DailyClassIDFK 			FOREIGN KEY(ClassID)
											REFERENCES CLASSES(ClassID)
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
`Password`		    VARCHAR(30)							UNIQUE,
UserType            VARCHAR(30)
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
(FirstName, LastName, Email, Phone, UserName, `Password`, UserType)
VALUES
('Bobby', 'Mcgee', 'robertmcGee2120@fakemail.com', '(206) 555-7892', 'mcgeeb', 'pass1', 'Teacher'),
('Anne', 'Sullivan', 'sully@fakemail.com', '(206) 555-6471', 'sullivana', 'pass2', 'Teacher'),
('Florence', 'Nightengale', 'flo@fakemail.com', '(206) 555-2222','nightegalef', 'pass3', 'Teacher');


INSERT INTO CLASSES
(TeacherID, Classroom)
Values
(1, 'red'),
(2, 'blue');

INSERT INTO DAYLIES 
(Title, ClassID, DailyText)
VALUES
("Friday Fun", 1,
"metus blandit erat, in feugiat diam quam non magna. Phasellus eleifend nisl quis mi scelerisque aliquam. "),

("SCIENCE", 1,
"rhoncus eros. Nunc vulputate nisi molestie, ultricies metus eu, volutpat justo. Praesent id sodales neque.
 Mauris ultricies et elit id ornare. Vestibulum est tellus, lacinia a eros vel, interdum"),

("Welcome Back", 2,
"Vivamus nec auctor elit. Integer mattis venenatis fringilla. Quisque tempus diam sit amet mattis 
commodo. Phasellus volutpat diam vestibulum, tristique metus non, pharetra eros. Aliquam nec leo eleifend,
congue nisl varius, suscipit elit");

INSERT INTO STUDENTS 
(ClassID, FirstName, LastName)
VALUES
(1, 'Kevin', 'McAllister'),
(2, 'Buzz', 'McAllister'),
(1, 'Charlie', 'Brown'),
(1, 'Eli', 'Manning'),
(2, 'Peyton', 'Manning');


INSERT INTO PARENTS 
(FirstName, LastName, Email, Phone, UserName, `Password`, UserType)
VALUES
('Peter', 'McAllister', 'petermcallister1955@fakemail.com', '(206) 555-7999', 'mcallisterp', 'pass1', 'Parent'),
('Kate', 'McAllister', 'katemcallister1955@fakemail.com', '(206) 555-7999', 'mcallisterk', 'pass2', 'Parent'),
('MwaMwa', 'Brown', 'mwamwa@fakemail.com', '(206) 555-2189', 'brownm', 'pass3', 'Parent'),
('Archie', 'Manning', 'archiemanning@fakemail.com', '(206) 555-6789', 'manninga', 'pass4', 'Parent');

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
