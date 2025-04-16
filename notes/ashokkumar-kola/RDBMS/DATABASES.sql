-- COMPANY DATABASE


    -- Create the Database:
        CREATE DATABASE company_db;
        USE company_db;


    -- Departments Table (Master Data):
        CREATE TABLE departments (
            dept_id INT AUTO_INCREMENT PRIMARY KEY,
            dept_name VARCHAR(100) UNIQUE NOT NULL,
            location VARCHAR(100) NOT NULL
        );

        INSERT INTO departments (dept_name, location) VALUES
        ('HR', 'New York'),
        ('Engineering', 'San Francisco'),
        ('Marketing', 'Los Angeles'),
        ('Finance', 'Chicago');

		INSERT INTO departments (dept_name, location) VALUES
		('Human Resources', 'New York'),
		('Finance', 'Los Angeles'),
		('IT', 'San Francisco'),
		('Marketing', 'Chicago'),
		('Operations', 'Houston');
        
    -- Employees Table (Core Entity):
        CREATE TABLE employees (
            emp_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            phone VARCHAR(15) UNIQUE,
            hire_date DATE NOT NULL,
            salary DECIMAL(10, 2) CHECK (salary > 0),
            dept_id INT,
            manager_id INT,
            FOREIGN KEY (dept_id) REFERENCES departments(dept_id) ON DELETE CASCADE,
            FOREIGN KEY (manager_id) REFERENCES employees(emp_id) ON DELETE SET NULL
        );

        INSERT INTO employees (name, email, phone, hire_date, salary, dept_id, manager_id) VALUES
        ('Alice Johnson', 'alice@example.com', '1234567890', '2021-01-15', 70000, 1, NULL),
        ('Bob Smith', 'bob@example.com', '9876543210', '2020-06-22', 85000, 2, 1),
        ('Charlie Brown', 'charlie@example.com', '5556667777', '2023-03-10', 65000, 3, 1),
        ('Daisy White', 'daisy@example.com', '4445556666', '2022-09-17', 90000, 4, 2);
        
        INSERT INTO employees (name, email, phone, hire_date, salary, dept_id, manager_id) VALUES
		('Alice Johnson', 'alice@example.com', '1234567890', '2020-05-10', 60000, 1, NULL), 
		('Bob Smith', 'bob@example.com', '2345678901', '2019-08-15', 75000, 2, 1), 
		('Charlie Davis', 'charlie@example.com', '3456789012', '2018-11-20', 80000, 3, 2), 
		('David Brown', 'david@example.com', '4567890123', '2021-02-05', 70000, 3, 2), 
		('Eve Taylor', 'eve@example.com', '5678901234', '2022-06-12', 50000, 4, NULL), 
		('Frank White', 'frank@example.com', '6789012345', '2017-03-25', 90000, 5, 1);



    -- Projects Table (Many-to-Many Relationship):
        CREATE TABLE projects (
            project_id INT AUTO_INCREMENT PRIMARY KEY,
            project_name VARCHAR(150) NOT NULL,
            start_date DATE,
            end_date DATE,
            status ENUM('In Progress', 'Completed', 'On Hold') DEFAULT 'In Progress'
        );

        INSERT INTO projects (project_name, start_date, end_date, status) VALUES
        ('Website Redesign', '2023-01-10', '2023-06-15', 'Completed'),
        ('Product Launch', '2023-05-01', '2023-12-01', 'In Progress'),
        ('Security Audit', '2023-07-15', '2023-09-30', 'On Hold');
        
        INSERT INTO projects (project_name, start_date, end_date, status) VALUES
		('Website Redesign', '2023-01-10', '2023-06-30', 'Completed'),
		('Financial Audit', '2023-02-15', '2023-08-20', 'In Progress'),
		('Cloud Migration', '2023-03-01', '2023-09-30', 'On Hold'),
		('Marketing Campaign', '2023-04-10', '2023-10-15', 'In Progress'),
		('Logistics Optimization', '2023-05-05', '2023-12-01', 'Completed');



    -- Employee_Project (Bridge Table):
        CREATE TABLE employee_project (
            emp_id INT,
            project_id INT,
            assigned_date DATE,
            role VARCHAR(50) DEFAULT 'Developer',
            PRIMARY KEY (emp_id, project_id),
            FOREIGN KEY (emp_id) REFERENCES employees(emp_id) ON DELETE CASCADE,
            FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
        );

        INSERT INTO employee_project (emp_id, project_id, assigned_date, role) VALUES
        (2, 1, '2023-01-15', 'Lead Developer'),
        (3, 2, '2023-06-01', 'Marketing Specialist'),
        (4, 3, '2023-08-01', 'Finance Analyst');
        
        INSERT INTO employee_project (emp_id, project_id, assigned_date, role) VALUES
		(1, 1, '2023-01-15', 'Manager'),
		(2, 2, '2023-02-20', 'Financial Analyst'),
		(3, 3, '2023-03-10', 'Cloud Engineer'),
		(4, 4, '2023-04-20', 'Marketing Lead'),
		(5, 5, '2023-05-10', 'Operations Manager'),
		(3, 1, '2023-06-01', 'Developer'),
		(2, 3, '2023-06-15', 'Consultant');



    -- Users Table (DCL Demonstration):
        CREATE TABLE users (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            role ENUM('Admin', 'Manager', 'Employee') DEFAULT 'Employee'
        );

        
		INSERT INTO users (username, password_hash, role) VALUES
		('admin_user', 'hashed_password_1', 'Admin'),
		('manager_bob', 'hashed_password_2', 'Manager'),
		('employee_charlie', 'hashed_password_3', 'Employee'),
		('employee_david', 'hashed_password_4', 'Employee'),
		('manager_eve', 'hashed_password_5', 'Manager');

	





-- COLLEGE DATABASE
CREATE DATABASE  IF NOT EXISTS `college`;
USE `college`;
--
-- Table structure for table `courses`
--
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `units` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
--
-- Dumping data for table `courses`
--
LOCK TABLES `courses` WRITE;
INSERT INTO `courses` VALUES (1,'computer science',3),(2,'literature',3),(3,'design',3);
UNLOCK TABLES;
--
-- Table structure for table `students`
--
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
--
-- Dumping data for table `students`
--
LOCK TABLES `students` WRITE;
INSERT INTO `students` VALUES (1,'example1','user1','user1@user1email.com'),
(2,'example2','user2','user2@user2email.com'),
(3,'example3','user3','user3@user3email.com'),
(4,'example4','user4','user4@user4email.com');
UNLOCK TABLES;
--
-- Table structure for table `students_courses`
--
DROP TABLE IF EXISTS `students_courses`;
CREATE TABLE `students_courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `student_id_idx` (`student_id`),
  KEY `course_id_idx` (`course_id`),
  CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
--
-- Dumping data for table `students_courses`
--
LOCK TABLES `students_courses` WRITE;
INSERT INTO `students_courses` VALUES (1,1,1),(2,1,3),(3,2,3),(4,3,1),(5,3,2),(6,3,3),(7,4,1),(8,2,3);
UNLOCK TABLES;




















