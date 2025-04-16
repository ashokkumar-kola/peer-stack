
-- DATABASE
USE company_db;

-- TABLES
SHOW TABLES;  

DESC employees;
DESC departments;
DESC projects;
DESC employee_project;
DESC users;

SELECT * FROM employees;
SELECT * FROM departments;
SELECT * FROM projects;
SELECT * FROM employee_project;
SELECT * FROM users;

TRUNCATE TABLE employees;
TRUNCATE TABLE departments;
TRUNCATE TABLE projects;
TRUNCATE TABLE employee_project;
TRUNCATE TABLE users;

DROP TABLE employees;
DROP TABLE departments;
DROP TABLE projects;
DROP TABLE employee_project;
DROP TABLE users;

---

### **1. Departments Table**
-- | dept_id | dept_name       | location       |
-- |---------|-----------------|----------------|
-- | 1       | Human Resources | New York       |
-- | 2       | Finance         | Los Angeles    |
-- | 3       | IT              | San Francisco  |
-- | 4       | Marketing       | Chicago        |
-- | 5       | Operations      | Houston        |

-- --- 

### **2. Employees Table**
-- | emp_id | name          | email               | phone       | hire_date  | salary  | dept_id | manager_id |
-- |--------|---------------|---------------------|-------------|------------|---------|---------|------------|
-- | 1      | Alice Johnson | alice@example.com   | 1234567890  | 2020-05-10 | 60000   | 1       | NULL       |
-- | 2      | Bob Smith     | bob@example.com     | 2345678901  | 2019-08-15 | 75000   | 2       | 1          |
-- | 3      | Charlie Davis | charlie@example.com | 3456789012  | 2018-11-20 | 80000   | 3       | 2          |
-- | 4      | David Brown   | david@example.com   | 4567890123  | 2021-02-05 | 70000   | 3       | 2          |
-- | 5      | Eve Taylor    | eve@example.com     | 5678901234  | 2022-06-12 | 50000   | 4       | NULL       |
-- | 6      | Frank White   | frank@example.com   | 6789012345  | 2017-03-25 | 90000   | 5       | 1          |

---

### **3. Projects Table**
-- | project_id | project_name           | start_date | end_date   | status      |
-- |------------|------------------------|------------|------------|-------------|
-- | 1          | Website Redesign       | 2023-01-10 | 2023-06-30 | Completed   |
-- | 2          | Financial Audit        | 2023-02-15 | 2023-08-20 | In Progress |
-- | 3          | Cloud Migration        | 2023-03-01 | 2023-09-30 | On Hold     |
-- | 4          | Marketing Campaign     | 2023-04-10 | 2023-10-15 | In Progress |
-- | 5          | Logistics Optimization | 2023-05-05 | 2023-12-01 | Completed   |

-- ---

### **4. Employee_Project (Many-to-Many Relationship)**
-- | emp_id | project_id| assigned_date| role               |
-- |--------|-----------|--------------|--------------------|
-- | 1      | 1         | 2023-01-15   | Manager            |
-- | 2      | 2         | 2023-02-20   | Financial Analyst  |
-- | 3      | 3         | 2023-03-10   | Cloud Engineer     |
-- | 4      | 4         | 2023-04-20   | Marketing Lead     |
-- | 5      | 5         | 2023-05-10   | Operations Manager |
-- | 3      | 1         | 2023-06-01   | Developer          |
-- | 2      | 3         | 2023-06-15   | Consultant         |

-- ---

### **5. Users Table**
-- | user_id | username         | password_hash      | role     |
-- |---------|------------------|--------------------|----------|
-- | 1       | admin_user       | hashed_password_1  | Admin    |
-- | 2       | manager_bob      | hashed_password_2  | Manager  |
-- | 3       | employee_charlie | hashed_password_3  | Employee |
-- | 4       | employee_david   | hashed_password_4  | Employee |
-- | 5       | manager_eve      | hashed_password_5  | Manager  |

-- ---




-- ################### --
-- #####  JOINS  ##### --
-- ################### --


    -- ✅ CARTESIAN JOIN  / CROSS JOIN: combining each row from the first table with every row from the second table
		SELECT e.*, d.*
		FROM employees e
		CROSS JOIN departments d;

		SELECT e.*, d.*
		FROM employees e, departments d;

		SELECT e.*, d.*
		FROM employees e
		CROSS JOIN departments d
        WHERE emp_id < 2;
        
        SELECT e.name, e.email, d.dept_name, d.location
		FROM employees e
		CROSS JOIN departments d
        WHERE emp_id < 2;
		
        SELECT COUNT(*)
		FROM employees e
		CROSS JOIN departments d;



    -- ✅ INNER JOIN / EQUI JOIN: Retrieves records with matching values in both tables.
		-- Explicit 
		SELECT e.*, d.*
		FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id;
        -- Implicit
        SELECT e.*, d.*
		FROM employees e, departments d
		WHERE e.dept_id = d.dept_id;
        --
        SELECT e.name, e.email, d.dept_name, d.location
		FROM employees e
		JOIN departments d ON e.dept_id = d.dept_id;
        -- when both tables have a column with the same name.
        SELECT e.name, d.dept_name
		FROM employees e
		INNER JOIN departments d USING (dept_id);
				
        SELECT e.*, d.*
		FROM employees e
		INNER JOIN departments d 
			ON e.dept_id = d.dept_id 
			AND e.status = 'Active';
		
        SELECT e.name, e.email, d.dept_name, d.location
		FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id;

		SELECT e.name AS Employee, e.email, d.dept_name AS Department
		FROM employees AS e
		INNER JOIN departments AS d ON e.dept_id = d.dept_id;

        SELECT d.dept_name, COUNT(e.emp_id) AS EmployeeCount
		FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id
		GROUP BY d.dept_name;

		SELECT d.dept_name, MAX(salary) 
        FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id
		GROUP BY d.dept_name;
        
        SELECT e.name, d.dept_name, m.username
		FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id
		INNER JOIN users m ON e.emp_id = m.user_id;
        
        -- Filter before join (restricts employees before matching)
		SELECT e.name, d.dept_name
		FROM employees e
		INNER JOIN departments d ON e.dept_id = d.dept_id
		WHERE e.status = 'Active';

		-- Filter after join (matches first, then filters)
		SELECT e.name, d.dept_name
		FROM (SELECT * FROM employees WHERE status = 'Active') e
		INNER JOIN departments d ON e.dept_id = d.dept_id;


    -- ✅ OUTER JOIN
        -- LEFT OUTER JOIN: Retrieves all records from the left table and matched records from the right table.
            SELECT e.LastName, e.DeptID, d.DeptName
            FROM Emp e
            LEFT JOIN Dept d ON e.DeptID = d.DeptID;


        -- RIGHT OUTER JOIN: Retrieves all records from the right table and matched records from the left table.
            SELECT e.LastName, e.DeptID, d.DeptName
            FROM Emp e
            RIGHT JOIN Dept d ON e.DeptID = d.DeptID;


        -- FULL OUTER JOIN: Retrieves records when there is a match in either left or right table.
            SELECT e.LastName, e.DeptID, d.DeptName
            FROM Emp e
            LEFT JOIN Dept d ON e.DeptID = d.DeptID
            UNION
            SELECT e.LastName, e.DeptID, d.DeptName
            FROM Emp e
            RIGHT JOIN Dept d ON e.DeptID = d.DeptID;


    -- ✅ SELF JOIN: Joins a table to itself to compare rows within the same table.
        SELECT e1.LastName AS Emp1, e2.LastName AS Emp2, e1.DeptID
        FROM Emp e1
        INNER JOIN Emp e2 ON e1.DeptID = e2.DeptID
        WHERE e1.LastName < e2.LastName;


    -- ✅ NATURAL JOIN: Automatically joins tables based on columns with the same name and data type in both tables.
        SELECT *
        FROM table_name_1
        NATURAL JOIN table_name_2;


    -- ✅ NON EQUI JOIN : Joins tables without using the equality operator (=)—commonly using <, >, <=, >=, or BETWEEN.
        SELECT e.emp_id, e.emp_name, s.salary_range
        FROM employees e
        JOIN salary_brackets s
        ON e.salary BETWEEN s.min_salary AND s.max_salary;