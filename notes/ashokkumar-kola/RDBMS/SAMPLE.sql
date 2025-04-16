INSERT INTO employees (name, age, salary, department_id)
VALUES
    ('Alice Johnson', 28, 60000.00, 1),
    ('Bob Smith', 35, 75000.00, 2),
    ('Charlie Brown', 40, 85000.50, 3),
    ('Diana Prince', 29, 72000.00, 4),
    ('Ethan Hunt', 32, 68000.75, 1),
    ('Fiona Gallagher', 26, 51000.00, 2),
    ('George Miller', 45, 92000.25, 3),
    ('Hannah Davis', 31, 65000.00, 4),
    ('Ian Curtis', 27, 57000.00, 1),
    ('Jessica Pearson', 38, 89000.50, 2),
    ('Kevin Malone', 50, 48000.00, 3),
    ('Laura Palmer', 24, 53000.00, 4),
    ('Mike Ross', 30, 70000.00, 1),
    ('Nancy Wheeler', 23, 52000.00, 2),
    ('Oscar Martinez', 37, 78000.00, 3);

INSERT INTO departments (department_id, department_name)
VALUES (1, 'HR'), (2, 'Engineering'), (3, 'Testing'), (4, 'Finance');

ALTER TABLE employees
DROP INDEX fk_department;




CREATE TABLE Employee (
    Employee_ID INT Primary Key,
    Employee_Name VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2),
    Join_Date DATE,
    Age INT
);


ALTER TABLE Employee
ADD COLUMN Email VARCHAR(100);

ALTER TABLE Employee
CHANGE COLUMN Employee_Name Full_Name VARCHAR(100);

ALTER TABLE Employee
DROP COLUMN Email;

DROP TABLE Employee;











CREATE [OR REPLACE] [FORCE|NOFORCE] VIEW view
                       [(alias[, alias]...)]
                       AS subquery
                       [WITH CHECK OPTION [CONSTRAINT constraint]]
                       [WITH READ ONLY [CONSTRAINT constraint]];

CREATE VIEW salvu50
               AS SELECT employee_id ID_NUMBER, last_name NAME,
               salary*12 ANN_SALARY
               FROM employees
               WHERE department_id = 50;

SELECT *
FROM salvu50;



CREATE SEQUENCE sequence
                    [INCREMENT BY n]
                    [START WITH n]
                    [{MAXVALUE n | NOMAXVALUE}]
                    [{MINVALUE n | NOMINVALUE}]
                    [{CYCLE | NOCYCLE}]
                    [{CACHE n | NOCACHE}];


CREATE SEQUENCE dept_deptid_seq
                        INCREMENT BY 10
                        START WITH 120
                        MAXVALUE 9999
                        NOCACHE
                        NOCYCLE;

SELECT sequence_name, min_value, max_value,
                       increment_by, last_number
                       FROM   user_sequences;


    


CREATE INDEX index
            ON table (column[, column]...);




CREATE INDEX emp_last_name_idx
                ON  employees(last_name);


-- Categories of End Users in DBMS
    -- Casual End users
    -- Naive or Parametric End Users
    -- Application Programmers
    -- Sophisticated End Users
    -- Standalone Users
    -- Specialised Users


-- Interfaces in DBMS
    -- Menu-Based Interfaces
    -- Forms-Based Interfaces
    -- Graphical User Interface
    -- Natural Language Interfaces
    -- Speech Input and Output Interfaces
    -- Interface for Parametric Users
    -- Interfaces for Database Administrators (DBA)


-- Data Abstraction and Data Independence
    -- Database systems comprise complex data structures. 
    -- In order to make the system efficient in terms of retrieval of data, and reduce complexity in terms of usability of users, 
    -- developers use abstraction i.e. hide irrelevant details from the users. 

    -- Level of Abstraction in a DBMS
        -- Physical or Internal Level
            -- how the data is actually stored in memory.
            -- it will contains block of storages (bytes,GB,TB,etc)
        -- Logical or Conceptual Level
            -- the information that is actually stored in the database in the form of tables.
            -- it will contain the fields and the attributes of data.
        -- View or External Level
            -- Only a part of the actual database is viewed by the users. 
            -- it works with CLI or GUI access of database


-- Data Independence
    -- Data Independence is mainly defined as a property of DBMS that helps you to change the database schema 
    -- at one level of a system without requiring to change the schema at the next level.

    -- Physical level data independence
        -- Utilizing new storage devices.
        -- Modifying data structures used for storage.
        -- Altering indexes or using alternative file organization techniques etc.

    -- Logical level data independence
        -- The user view of the data would not be affected by any changes to the conceptual view of the data.
















INSERT INTO tenants (tenant_id) 
SELECT CONCAT('RTTT', LPAD(COALESCE(MAX(id) + 1, 1), 6, '0')) FROM tenants;

INSERT INTO landlords (landlord_id) 
SELECT CONCAT('RTLL', LPAD(COALESCE(MAX(id) + 1, 1), 6, '0')) FROM landlords;

INSERT INTO admins (admin_id) 
SELECT CONCAT('RTAD', LPAD(COALESCE(MAX(id) + 1, 1), 6, '0')) FROM admins;


