-- Turn off autocommit for the session
SET autocommit = 0; -- 1 - Restore autocommit

USE test;

SHOW TABLES;

-- Create the employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);

-- Insert 5 rows into the employees table
INSERT INTO employees (name, position, salary) VALUES
('Alice', 'Developer', 75000.00),
('Bob', 'Designer', 68000.00),
('Charlie', 'Manager', 85000.00),
('David', 'Analyst', 72000.00),
('Eve', 'Tester', 65000.00);

COMMIT;

-- Add 5 more rows
INSERT INTO employees (name, position, salary) VALUES
('Frank', 'Developer', 77000.00),
('Grace', 'Designer', 69000.00),
('Hank', 'Manager', 88000.00),
('Ivy', 'Analyst', 74000.00),
('Jack', 'Tester', 67000.00);

ROLLBACK;

-- Update 5 rows
UPDATE employees SET salary = salary + 5000 WHERE id <= 5;

-- Delete 5 rows
DELETE FROM employees WHERE id > 8;

-- Create another table
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50)
);

-- Insert 5 rows into the departments table
INSERT INTO departments (name, location) VALUES
('Engineering', 'New York'),
('Design', 'San Francisco'),
('Management', 'Chicago'),
('Analytics', 'Boston'),
('Testing', 'Seattle');


ROLLBACK;

COMMIT;


-- ======================================================================
-- Ensure changes are not committed automatically
START TRANSACTION;

-- DML operations (Insert, Update, Delete)

-- Add 5 more rows
INSERT INTO employees (name, position, salary) VALUES
('Frank', 'Developer', 77000.00),
('Grace', 'Designer', 69000.00),
('Hank', 'Manager', 88000.00),
('Ivy', 'Analyst', 74000.00),
('Jack', 'Tester', 67000.00);

-- Update 5 rows
UPDATE employees SET salary = salary + 10000 WHERE id <= 5;

-- Delete 5 rows
DELETE FROM employees WHERE id > 8;

-- Create another table
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50)
);

-- Insert 5 rows into the departments table
INSERT INTO departments (name, location) VALUES
('Engineering', 'New York'),
('Design', 'San Francisco'),
('Management', 'Chicago'),
('Analytics', 'Boston'),
('Testing', 'Seattle');

ROLLBACK;

COMMIT; -- Or ROLLBACK; if needed
-- ======================================================================

SELECT * FROM employees;

SELECT * FROM departments;

DESC employees;


DROP TABLE employees;

DROP TABLE departments;



