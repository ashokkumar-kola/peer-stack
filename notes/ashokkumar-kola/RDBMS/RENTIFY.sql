-- How to Design a Database?
    -- Get all the requirements
    -- Establish functional dependencies
    -- Draw an Entity-Relationship Diagram
    -- Convert the ER diagram into the relational model
    -- Create these relations into our database with appropriate constraints.


    -- Step 1: Identify the Entities (Tables)
        -- 🔹 User (Common attributes for all users: Tenants, Landlords, Admins)
        -- 🔹 Tenant (Renter-specific details)
        -- 🔹 Landlord (Property owner-specific details)
        -- 🔹 Admin (Platform administrators)
        -- 🔹 Property (Rental listings)
        -- 🔹 Visit_Request (Property viewing requests)
        -- 🔹 Rental_Application (Applications submitted by tenants)
        -- 🔹 Lease_Agreement (Digitally signed lease documents)
        -- 🔹 Payment (Rent, deposits, and transactions)
        -- 🔹 Review (Ratings and reviews for properties and users)

    -- Step 2: Define Attributes for Each Entity
        -- 1️⃣ User (Base Table for All Users)
            -- user_id (PK)
            -- name
            -- email (Unique)
            -- phone
            -- password
            -- user_type (Enum: Tenant, Landlord, Admin)
            -- created_at

        -- 2️⃣ Tenant (Extends User)
            -- tenant_id (PK, FK → User)
            -- income_proof
            -- rental_history

        -- 3️⃣ Landlord (Extends User)
            -- landlord_id (PK, FK → User)
            -- property_ownership_proof

        -- 4️⃣ Admin (Extends User)
            -- admin_id (PK, FK → User)
            -- role (Enum: Super Admin, Compliance Officer)

        -- 5️⃣ Property
            -- property_id (PK)
            -- landlord_id (FK → Landlord)
            -- title
            -- description
            -- location
            -- price
            -- amenities
            -- status (Available, Rented, Pending)

        -- 6️⃣ Visit_Request
            -- visit_id (PK)
            -- tenant_id (FK → Tenant)
            -- property_id (FK → Property)
            -- visit_date
            -- status (Pending, Approved, Declined)

        -- 7️⃣ Rental_Application
            -- application_id (PK)
            -- tenant_id (FK → Tenant)
            -- property_id (FK → Property)
            -- status (Pending, Approved, Rejected)
            -- submitted_at

        -- 8️⃣ Lease_Agreement
            -- lease_id (PK)
            -- tenant_id (FK → Tenant)
            -- landlord_id (FK → Landlord)
            -- property_id (FK → Property)
            -- start_date
            -- end_date
            -- terms_conditions
            -- status (Active, Completed, Terminated)

        -- 9️⃣ Payment
            -- payment_id (PK)
            -- tenant_id (FK → Tenant)
            -- property_id (FK → Property)
            -- amount
            -- payment_date
            -- status (Pending, Paid, Failed)

        -- 🔟 Review
            -- review_id (PK)
            -- user_id (FK → User)
            -- property_id (FK → Property)
            -- rating (1-5)
            -- comment
            -- created_at

    -- Step 3: Define Relationships
        -- 🔗 One-to-Many (1:M) Relationships
            -- A User can be a Tenant, Landlord, or Admin (User → Tenant / Landlord / Admin)
            -- A Landlord can have multiple Properties (Landlord → Property)
            -- A Tenant can request multiple Visit_Requests (Tenant → Visit_Request)
            -- A Tenant can submit multiple Rental_Applications (Tenant → Rental_Application)
            -- A Landlord can approve/reject multiple Rental_Applications (Landlord → Rental_Application)
            -- A Tenant can have multiple Payments (Tenant → Payment)

        -- 🔗 Many-to-Many (M:N) Relationships
            -- A Tenant can apply for multiple Properties, and a Property can have multiple Applications → Rental_Application (Junction Table)
            -- A Tenant can sign a Lease Agreement for a Property, and a Landlord can have multiple agreements → Lease_Agreement (Junction Table)
            -- A User can leave multiple Reviews, and a Property can have multiple Reviews → Review (Junction Table)


    -- Step 4: Create the ER Diagram

        --                +--------------------+
        --                |       USER         |
        --                |--------------------|
        --                | user_id (PK)       |
        --                | name               |
        --                | email (Unique)     |
        --                | phone              |
        --                | password           |
        --                | user_type (Enum)   |
        --                | created_at         |
        --                +--------------------+
        --                      | (1:1)
        --         +------------+------------+
        --         |                         |
        -- +----------------+    +----------------+    +----------------+
        -- |    TENANT      |    |   LANDLORD     |    |    ADMIN       |
        -- |---------------|    |---------------|    |---------------|
        -- | tenant_id (PK)|    | landlord_id (PK)|    | admin_id (PK)  |
        -- | income_proof  |    | ownership_proof |    | role (Enum)    |
        -- +----------------+    +----------------+    +----------------+

        --                      (1:M)
        --                +--------------------+
        --                |    PROPERTY        |
        --                |--------------------|
        --                | property_id (PK)   |
        --                | landlord_id (FK)   |
        --                | title              |
        --                | location           |
        --                | price              |
        --                | amenities          |
        --                | status             |
        --                +--------------------+
        --                      | (M:N)
        --         +------------+------------+
        --         |                         |
        -- +----------------+    +----------------+
        -- | RENTAL_APPL.  |    | LEASE_AGREEMENT |
        -- |---------------|    |----------------|
        -- | application_id|    | lease_id (PK)   |
        -- | tenant_id (FK)|    | tenant_id (FK)  |
        -- | property_id   |    | landlord_id (FK)|
        -- | status        |    | terms_conditions|
        -- +----------------+    +----------------+





-- Firm Size	User Base	           DB Size	        Examples
-- Small	    < 10,000 users	       < 10 GB	        Local startups, small rental apps
-- Medium	    10,000 - 1M users	   10GB - 500GB	    Growing real estate platforms (like regional rental apps)
-- Large	    1M+ users	           500GB - 10TB+    Airbnb, Uber, Zillow, Booking.com






-- ====================================================
-- ################# RENTIFY DATABASE ################
-- ====================================================


-- --------------------------
-- DATABASE SETUP
-- --------------------------

    -- Choose the Right Database Engine
        SET default_storage_engine = InnoDB;


    -- Configure Server Settings (Optimization & Performance)
        [mysqld]
        innodb_file_per_table = 1
        max_connections = 500
        query_cache_size = 64M

        -- Restart MySQL after changes: sudo systemctl restart mysql

    
    -- Set Up Backup & Recovery Plan
        -- Enable binlogs for point-in-time recovery:
            log_bin = mysql-bin
        -- Schedule automated backups using mysqldump or Percona XtraBackup:
            mysqldump -u root -p rentify > rentify_backup.sql

    
    -- Enable Monitoring & Logging
        -- Use MySQL Slow Query Log to detect slow queries:
            slow_query_log = 1
            long_query_time = 2
            log_output = FILE



-- ----------------------------
-- CREATE DATABASE RENTIFY	
-- ----------------------------

    -- CREATE DB
        DROP DATABASE IF EXISTS rentify;
        CREATE DATABASE IF NOT EXISTS rentify; -- some database systems are case-sensitive [RENTIFY]
        USE rentify; 


    -- Define Character Set and Collation
        -- Use utf8mb4 for full Unicode support (including emojis).
        -- Use utf8mb4_unicode_ci for proper sorting and comparison.
        CREATE DATABASE rentify CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


    -- Follow a Modular Approach (Schema-Based Design)
        -- If your project is large, use multiple schemas (logical separation).
        -- Example: rentify_users, rentify_properties, rentify_payment


    -- Ensure Proper Privileges (Security Best Practices)
        CREATE USER 'rentify_user'@'localhost' IDENTIFIED BY 'StrongPassword';
        GRANT ALL PRIVILEGES ON rentify.* TO 'rentify_user'@'localhost';
        FLUSH PRIVILEGES;









-- Approach 1: Single users Table with a Role Column
    -- ✅ Pros of This Approach:
        -- ✅ Simpler Queries – No need for complex JOIN operations.
        -- ✅ Less Maintenance – Only one table to manage.
        -- ✅ Faster Reads – Retrieving user details is straightforward.
        -- ✅ Easier Role Management – Simple role column controls access.

    -- ❌ Cons of This Approach:
        -- ❌ Data Sparsity – Many NULL values for irrelevant fields.
        -- ❌ Less Strict Data Integrity – Possible to store inconsistent data (e.g., a tenant with total_earnings).
        -- ❌ Harder to Extend – If tenants or landlords require a lot of unique attributes, the table grows messy.
        -- ❌ Data Integrity - Weaker (mixed data)

        -- ❌ A landlord doesn’t need rental_score.
        -- ❌ A tenant doesn’t need total_earnings.
        -- ❌ Wasting storage & making queries complex.
        -- ❌ If someone is both a tenant and a landlord, it's impossible.

        -- ❌ What if we add agents or property managers later?
        -- ❌ We need to alter the table every time we add new roles.


-- Approach 2: Separate Tables for Each User Type + Roles Table
    -- ✅ Pros of This Approach:
        -- ✅ Strict Data Separation 
            -- Each role has dedicated space.
            -- No unnecessary fields in the users table

        -- ✅ Efficient Queries – Queries specific to tenants or landlords run faster.
        -- ✅ Scalability 
            -- If tenants/landlords need complex structures, they don’t interfere with each other.
            -- If a new role (e.g., maintenance_staff) is needed, just add another table.
        -- ✅ Security – Role-based table separation prevents unauthorized data access.

        -- ✅ Data Integrity - Stronger (fewer NULLs)
            -- Authentication remains simple (users table), but extended details are well-organized.

    -- ❌ Cons of This Approach:
        -- ❌ More JOINs – Fetching a user’s full details requires multiple joins.
        -- ❌ Complexity – More tables = more maintenance & migrations.
        -- ❌ A user can only be in one table (tenants, landlords, or admins).
        -- ❌ If a user is both tenant & landlord, we can’t insert them into both tables.
        -- ❌ To find a user’s role, we have to check all three tables every time.


-- Approach 3: Users Table + Roles Table + Role-Specific Extension Tables
    -- ✅ Scalability: Add more roles in the future without modifying users table.
        -- New roles (e.g., agents, property managers) 
    -- ✅ Efficiency: Avoids storing NULL fields in a single users table.
    -- ✅ Flexibility: A user can switch roles without creating a new account.
    -- ✅ Industry Standard: This is how large platforms like Airbnb & Zillow handle multiple roles.

-- Similar Multi-Role Approach
    -- Airbnb: A user can both book stays (tenant) and host properties (landlord).
    -- Zillow & Realtor.com: Users can both buy/rent (tenant) and sell/list (landlord).
    -- Uber (Similar Concept): A user can be both a rider (passenger) and a driver, stored in separate tables.



-- -----------------------
-- CREATE TABLES
-- -----------------------

    -- users table
        CREATE TABLE users (
            id BIGINT PRIMARY KEY AUTO_INCREMENT, 
            name VARCHAR(255) NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL, 
            password VARCHAR(255) NOT NULL, 
            phone VARCHAR(20) UNIQUE, 
            profile_image VARCHAR(255) NULL, 
            date_of_birth DATE NULL, 
            email_verified BOOLEAN DEFAULT FALSE, 
            phone_verified BOOLEAN DEFAULT FALSE, 
            status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
            last_login DATETIME NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP NULL
        );


    -- Roles Table
        CREATE TABLE roles (
            id INT PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(50) UNIQUE NOT NULL,
            description TEXT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );


    -- User Roles Table (Many-to-Many)
        CREATE TABLE user_roles (
            user_id BIGINT NOT NULL,
            role_id INT NOT NULL,
            assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (user_id, role_id),
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
            FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
        );

    
    -- roles table
        CREATE TABLE roles (
            role_id   INT PRIMARY KEY AUTO_INCREMENT,
            name ENUM('tenant', 'landlord', 'admin') UNIQUE NOT NULL
        );

    
    -- user_roles table
        CREATE TABLE user_roles (
            user_id BIGINT NOT NULL,
            role_id INT NOT NULL,
            PRIMARY KEY (user_id, role_id),
            FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
            FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE
        );


    -- tenants table
        CREATE TABLE tenants (
            tenant_id INT PRIMARY KEY,
            income_proof VARCHAR(255) NOT NULL,
            rental_history TEXT NULL,
            FOREIGN KEY (tenant_id) REFERENCES User(user_id) ON DELETE CASCADE
        );


    -- landlords table
        CREATE TABLE landlords (
            landlord_id INT PRIMARY KEY,
            property_ownership_proof VARCHAR(255) NOT NULL,
            FOREIGN KEY (landlord_id) REFERENCES User(user_id) ON DELETE CASCADE
        );


    -- admins table
        CREATE TABLE admin (
            admin_id INT PRIMARY KEY,
            admin_role ENUM('Super Admin', 'Compliance Officer') NOT NULL,
            FOREIGN KEY (admin_id) REFERENCES User(user_id) ON DELETE CASCADE
        );


    -- properties table
        CREATE TABLE properties (
            property_id INT AUTO_INCREMENT PRIMARY KEY,
            landlord_id INT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description TEXT NULL,
            location VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL CHECK(price > 0),
            amenities TEXT NULL,
            status ENUM('Available', 'Rented', 'Pending') DEFAULT 'Pending' NOT NULL,
            images BLOB,
            FOREIGN KEY (landlord_id) REFERENCES Landlord(landlord_id) ON DELETE CASCADE
        );


    -- visit_requests table
        CREATE TABLE visit_requests (
            visit_id INT AUTO_INCREMENT PRIMARY KEY,
            tenant_id INT NOT NULL,
            property_id INT NOT NULL,
            visit_date DATETIME NOT NULL,
            status ENUM('Pending', 'Approved', 'Declined') DEFAULT 'Pending' NOT NULL,
            FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id) ON DELETE CASCADE,
            FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
        );


    -- rental_applications table
        CREATE TABLE rental_applications (
            application_id INT AUTO_INCREMENT PRIMARY KEY,
            tenant_id INT NOT NULL,
            property_id INT NOT NULL,
            status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending' NOT NULL,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id) ON DELETE CASCADE,
            FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
        );


    -- lease_agreements table
        CREATE TABLE lease_agreements (
            lease_id INT AUTO_INCREMENT PRIMARY KEY,
            tenant_id INT NOT NULL,
            landlord_id INT NOT NULL,
            property_id INT NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE NOT NULL CHECK (end_date > start_date),
            terms_conditions TEXT NOT NULL,
            status ENUM('Active', 'Completed', 'Terminated') DEFAULT 'Active' NOT NULL,
            FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id) ON DELETE CASCADE,
            FOREIGN KEY (landlord_id) REFERENCES Landlord(landlord_id) ON DELETE CASCADE,
            FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
        );


    -- payments table
        CREATE TABLE payments (
            payment_id INT AUTO_INCREMENT PRIMARY KEY,
            tenant_id INT NOT NULL,
            property_id INT NOT NULL,
            amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
            payment_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
            status ENUM('Pending', 'Paid', 'Failed') DEFAULT 'Pending' NOT NULL,
            FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id) ON DELETE CASCADE,
            FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
        );
        

    -- reviews table
        CREATE TABLE reviews (
            review_id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            property_id INT NOT NULL,
            rating TINYINT(1) NOT NULL CHECK (rating BETWEEN 1 AND 5),
            comment TEXT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
            FOREIGN KEY (property_id) REFERENCES Property(property_id) ON DELETE CASCADE
        );





-- INSERT DATA

    -- User
        INSERT INTO User (name, email, phone, password, user_type)
        VALUES 
        ('Alice Smith', 'alice@example.com', '1234567890', 'hashed_password1', 'Tenant'),
        ('Bob Johnson', 'bob@example.com', '9876543210', 'hashed_password2', 'Landlord'),
        ('Charlie Admin', 'charlie@example.com', '5556667777', 'hashed_password3', 'Admin');

    -- Tenant
        INSERT INTO User (name, email, phone, password, user_type)
        VALUES ('Alice Tenant', 'alice.tenant@example.com', '1234567890', 'hashed_pass', 'Tenant');
        INSERT INTO Tenant (tenant_id, income_proof, rental_history)
        VALUES (LAST_INSERT_ID(), 'proof_123.pdf', 'Previously rented 3 properties.');

    -- Landlord
        INSERT INTO User (name, email, phone, password, user_type)
        VALUES ('Bob Landlord', 'bob.landlord@example.com', '9876543210', 'hashed_pass', 'Landlord');
        INSERT INTO Landlord (landlord_id, property_ownership_proof)
        VALUES (LAST_INSERT_ID(), 'ownership_doc_456.pdf');

    -- Admin
        INSERT INTO User (name, email, phone, password, user_type)
        VALUES ('Charlie Admin', 'charlie.admin@example.com', '5556667777', 'hashed_pass', 'Admin');
        INSERT INTO Admin (admin_id, role)
        VALUES (LAST_INSERT_ID(), 'Super Admin');


    -- Property
        INSERT INTO User (name, email, phone, password, user_type)
        VALUES ('Bob Landlord', 'bob.landlord@example.com', '9876543210', 'hashed_pass', 'Landlord');
        INSERT INTO Landlord (landlord_id, property_ownership_proof)
        VALUES (LAST_INSERT_ID(), 'ownership_doc_456.pdf');
        INSERT INTO Property (landlord_id, title, description, location, price, amenities, status)
        VALUES (LAST_INSERT_ID(), 'Luxury Apartment', '3BHK in downtown', 'New York', 2500.00, 'Pool, Gym, Parking', 'Available');


    -- Visit_Request
        INSERT INTO Visit_Request (tenant_id, property_id, visit_date)
        VALUES (1, 101, '2025-04-10 10:00:00');

    -- Rental_Application
        INSERT INTO Rental_Application (tenant_id, property_id)
        VALUES (1, 101);

    -- Lease_Agreement
        INSERT INTO Lease_Agreement (tenant_id, landlord_id, property_id, start_date, end_date, terms_conditions)
        VALUES (1, 10, 101, '2025-05-01', '2026-05-01', 'Tenant must pay rent on time.');

    -- Payment
        INSERT INTO Payment (tenant_id, property_id, amount, status)
        VALUES (1, 101, 1200.00, 'Pending');

    -- Review
        INSERT INTO Review (user_id, property_id, rating, comment)
        VALUES (2, 101, 5, 'Great apartment, highly recommend!');




-- FOREIGN KEYS

    ALTER TABLE Tenant ADD CONSTRAINT fk_tenant_user FOREIGN KEY (tenant_id) REFERENCES User(user_id);
    ALTER TABLE Landlord ADD CONSTRAINT fk_landlord_user FOREIGN KEY (landlord_id) REFERENCES User(user_id);
    ALTER TABLE Admin ADD CONSTRAINT fk_admin_user FOREIGN KEY (admin_id) REFERENCES User(user_id);

    ALTER TABLE Tenant ADD CONSTRAINT fk_tenant_user FOREIGN KEY (tenant_id) REFERENCES User(user_id);
    ALTER TABLE Landlord ADD CONSTRAINT fk_landlord_user FOREIGN KEY (landlord_id) REFERENCES User(user_id);


    ALTER TABLE Admin ADD CONSTRAINT fk_admin_user FOREIGN KEY (admin_id) REFERENCES User(user_id);
    ALTER TABLE Property ADD CONSTRAINT fk_property_landlord FOREIGN KEY (landlord_id) REFERENCES Landlord(landlord_id);


    -- Visit_Request
        ALTER TABLE Visit_Request 
        ADD CONSTRAINT fk_visit_tenant 
        FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id);

    -- Rental_Application
        ALTER TABLE Rental_Application 
        ADD CONSTRAINT fk_application_tenant 
        FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id);

    -- Lease_Agreement
        ALTER TABLE Lease_Agreement 
        ADD CONSTRAINT fk_lease_landlord 
        FOREIGN KEY (landlord_id) REFERENCES Landlord(landlord_id);

    -- Payment
        ALTER TABLE Payment 
        ADD CONSTRAINT fk_payment_tenant 
        FOREIGN KEY (tenant_id) REFERENCES Tenant(tenant_id);

    -- Review
        ALTER TABLE Review 
        ADD CONSTRAINT fk_review_user 
        FOREIGN KEY (user_id) REFERENCES User(user_id);


-- INDEXES

    -- User
        CREATE INDEX idx_user_email ON User(email);
        CREATE INDEX idx_user_phone ON User(phone);

    -- Tenant
        CREATE INDEX idx_tenant_income ON Tenant(income_proof);

    -- Landlord
        CREATE INDEX idx_landlord_proof ON Landlord(property_ownership_proof);

    -- Admin
        CREATE INDEX idx_admin_role ON Admin(role);
    
    -- Property
        CREATE INDEX idx_property_location ON Property(location);
        CREATE INDEX idx_property_status ON Property(status);
        CREATE INDEX idx_property_price ON Property(price);

    -- Visit_Request
        CREATE INDEX idx_visit_status ON Visit_Request(status);

    -- Rental_Application
        CREATE INDEX idx_application_status ON Rental_Application(status);

    -- Lease_Agreement
        CREATE INDEX idx_lease_status ON Lease_Agreement(status);

    -- Payment
        CREATE INDEX idx_payment_status ON Payment(status);
        
    -- Review
        CREATE INDEX idx_review_rating ON Review(rating);


-- TRIGGERS
    -- Trigger to Log User Creation
        CREATE TRIGGER before_user_insert
        BEFORE INSERT ON User
        FOR EACH ROW
        BEGIN
            INSERT INTO User_Log (user_id, action, log_time)
            VALUES (NEW.user_id, 'Created Account', NOW());
        END;

    -- Automatically Assign User Role When Inserted
        CREATE TRIGGER after_tenant_insert
        AFTER INSERT ON Tenant
        FOR EACH ROW
        BEGIN
            UPDATE User SET user_type = 'Tenant' WHERE user_id = NEW.tenant_id;
        END;

    -- Automatically Assign User Role When Inserted
        CREATE TRIGGER after_admin_insert
        AFTER INSERT ON Admin
        FOR EACH ROW
        BEGIN
            UPDATE User SET user_type = 'Admin' WHERE user_id = NEW.admin_id;
        END;

    -- Automatically Mark Property as Available After Insert
        CREATE TRIGGER after_property_insert
        AFTER INSERT ON Property
        FOR EACH ROW
        BEGIN
            UPDATE Property SET status = 'Available' WHERE property_id = NEW.property_id;
        END;

    -- Auto-Approve Visit Requests if the Tenant Has 3+ Approved Applications
        CREATE TRIGGER auto_approve_visit
        BEFORE INSERT ON Visit_Request
        FOR EACH ROW
        BEGIN
            DECLARE approved_count INT;
            SELECT COUNT(*) INTO approved_count 
            FROM Rental_Application 
            WHERE tenant_id = NEW.tenant_id AND status = 'Approved';

            IF approved_count >= 3 THEN
                SET NEW.status = 'Approved';
            END IF;
        END;

    -- Auto-Terminate Lease If End Date Passes
        CREATE TRIGGER auto_terminate_lease
        AFTER UPDATE ON Lease_Agreement
        FOR EACH ROW
        BEGIN
            IF NEW.end_date < CURDATE() THEN
                UPDATE Lease_Agreement SET status = 'Completed' WHERE lease_id = NEW.lease_id;
            END IF;
        END;

    -- Auto-Update Lease Status When End Date Passes
        CREATE TRIGGER auto_complete_lease
        BEFORE UPDATE ON Lease_Agreement
        FOR EACH ROW
        BEGIN
            IF NEW.end_date < CURDATE() THEN
                SET NEW.status = 'Completed';
            END IF;
        END;


    -- Auto-Update Payment Status When Payment is Processed
        CREATE TRIGGER auto_payment_status
        AFTER UPDATE ON Payment
        FOR EACH ROW
        BEGIN
            IF NEW.status = 'Paid' THEN
                UPDATE Lease_Agreement SET status = 'Active' WHERE property_id = NEW.property_id;
            END IF;
        END;




    -- Visit_Request

    -- Rental_Application

    -- Lease_Agreement

    -- Payment

    -- Review


-- PARTITIONS
    -- If Rentify scales up, we can partition by user_type:
        ALTER TABLE User PARTITION BY LIST COLUMNS(user_type) (
            PARTITION p_tenant VALUES IN ('Tenant'),
            PARTITION p_landlord VALUES IN ('Landlord'),
            PARTITION p_admin VALUES IN ('Admin')
        );

    -- Since Tenant and Landlord contain relatively small datasets, partitioning is not required.
        ALTER TABLE Tenant PARTITION BY HASH(tenant_id) PARTITIONS 4;
        ALTER TABLE Landlord PARTITION BY HASH(landlord_id) PARTITIONS 4;


        ALTER TABLE Property PARTITION BY LIST COLUMNS(location) (
            PARTITION p_north VALUES IN ('New York', 'Chicago', 'Boston'),
            PARTITION p_south VALUES IN ('Miami', 'Houston', 'Atlanta')
        );


    -- Visit_Request

    -- Rental_Application

    -- Lease_Agreement
        ALTER TABLE Lease_Agreement PARTITION BY RANGE (YEAR(start_date)) (
            PARTITION p_old VALUES LESS THAN (2024),
            PARTITION p_current VALUES LESS THAN (2025),
            PARTITION p_future VALUES LESS THAN MAXVALUE
        );

    -- Payment
        ALTER TABLE Payment PARTITION BY RANGE (YEAR(payment_date)) (
            PARTITION p_old VALUES LESS THAN (2024),
            PARTITION p_current VALUES LESS THAN (2025),
            PARTITION p_future VALUES LESS THAN MAXVALUE
        );

    -- Review
        ALTER TABLE Review PARTITION BY LIST COLUMNS(rating) (
            PARTITION p_low VALUES IN (1, 2),
            PARTITION p_mid VALUES IN (3, 4),
            PARTITION p_high VALUES IN (5)
        );


-- Privileges & Security
    -- Minimal Privileges for Each Role
        -- Role	       Privileges
        ---------------------------------------------------------
        -- Tenant	   SELECT, UPDATE (on own data)
        -- Landlord	   SELECT, UPDATE, INSERT (on their properties)
        -- Admin	   ALL PRIVILEGES

        GRANT SELECT, UPDATE ON User TO 'tenant_role';
        GRANT SELECT, UPDATE, INSERT ON User TO 'landlord_role';
        GRANT ALL PRIVILEGES ON User TO 'admin_role';


        GRANT SELECT, UPDATE ON Tenant TO 'tenant_role';
        GRANT SELECT, UPDATE, INSERT ON Landlord TO 'landlord_role';
        GRANT ALL PRIVILEGES ON Tenant, Landlord TO 'admin_role';


        GRANT ALL PRIVILEGES ON Admin TO 'admin_role';
        GRANT SELECT, INSERT, UPDATE ON Property TO 'landlord_role';
        GRANT SELECT ON Property TO 'tenant_role';

        GRANT INSERT, SELECT ON Visit_Request TO 'tenant_role';
        GRANT SELECT, UPDATE ON Rental_Application TO 'landlord_role';
        GRANT ALL PRIVILEGES ON Lease_Agreement TO 'admin_role';


        GRANT INSERT, SELECT ON Payment TO 'tenant_role';
        GRANT SELECT, INSERT ON Review TO 'tenant_role';
        GRANT ALL PRIVILEGES ON Lease_Agreement TO 'admin_role';

    
    -- Visit_Request

    -- Rental_Application

    -- Lease_Agreement

    -- Payment

    -- Review











































-- ---------------------
-- USER LOGIN 
-- --------------------
    -- To authenticate a user by email and password:
    -- Note: Store hashed passwords using SHA2, BCRYPT, or ARGON2 instead of plaintext.
        SELECT id, name, email 
        FROM users 
        WHERE email = 'user@example.com' 
        AND password = SHA2('UserPassword', 256);  -- Use hashing for security


    -- To check which roles a logged-in user has:
        SELECT r.name AS role
        FROM user_roles ur
        JOIN roles r ON ur.role_id = r.id
        WHERE ur.user_id = 1;  -- Replace with logged-in user's ID



-- 🔹 3️⃣ Fetch User Details Based on Role
    -- ✅ If the user is a tenant:
        SELECT u.id, u.name, u.email, t.rental_score
        FROM users u
        JOIN tenants t ON u.id = t.user_id
        WHERE u.id = 1;

    -- ✅ If the user is a landlord:
        SELECT u.id, u.name, u.email, l.total_earnings
        FROM users u
        JOIN landlords l ON u.id = l.user_id
        WHERE u.id = 1;


    -- Check If a User is Both Tenant & Landlord
        SELECT 
            SUM(CASE WHEN r.name = 'tenant' THEN 1 ELSE 0 END) AS is_tenant,
            SUM(CASE WHEN r.name = 'landlord' THEN 1 ELSE 0 END) AS is_landlord
        FROM user_roles ur
        JOIN roles r ON ur.role_id = r.id
        WHERE ur.user_id = 1;

    
    -- Assign a Role to a User
        INSERT INTO user_roles (user_id, role_id) 
        VALUES (1, (SELECT id FROM roles WHERE name = 'landlord'));


    -- Remove a Role (If a User No Longer Wants to Be a Landlord)
        DELETE FROM user_roles 
        WHERE user_id = 1 
            AND role_id = (SELECT id FROM roles WHERE name = 'landlord');




-- 🔹 Why ENUM in roles Table is a Problem?
    -- In this schema:
    CREATE TABLE roles (
        id   INT PRIMARY KEY AUTO_INCREMENT,
        name ENUM('tenant', 'landlord', 'admin') UNIQUE NOT NULL
    );
    -- 👎 Issue: The name column still uses ENUM, which limits flexibility.
    -- 👎 Problem: If you want to add "agent" or "moderator", you need to run an ALTER TABLE, which is inefficient.
    -- ✅ Correct Approach: Use VARCHAR Instead of ENUM

    -- Instead, use a VARCHAR column with a UNIQUE constraint:
    CREATE TABLE roles (
        id   INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(50) UNIQUE NOT NULL  -- Allows dynamic role additions
    );
    -- ✔ Flexible – You can insert new roles dynamically (INSERT INTO roles ...).
    -- ✔ Scalable – No need to modify schema when adding more roles.
    -- ✔ Industry Standard – Used by Airbnb, Uber, and Zillow for role-based access.






    -- "I am starting to create a database from scratch and want a clear, structured guide on how to do it step by step. Assume I am designing a large-scale, well-optimized database for a real-world application. Please cover:

    -- Requirement Analysis – How to gather and define data needs.
    -- Conceptual Design – How to create an ERD (Entity-Relationship Diagram).
    -- Logical Design – How to convert ERD to tables, define relationships, and normalize data.
    -- Physical Design – How to decide on indexing, storage optimization, and partitioning.
    -- Implementation – How to write SQL scripts for table creation, constraints, and relationships.
    -- Data Integrity & Security – How to enforce constraints, security policies, and access controls.
    -- Performance Optimization – How to handle indexing, caching, and query optimization.
    -- Backup & Recovery – How to implement backups, replication, and disaster recovery plans.
    -- Scaling Strategies – How to scale databases vertically and horizontally.
    -- Best Practices – What are the best practices followed by industry experts?

    -- Guide me with examples and SQL queries where needed."



















-- create users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15) UNIQUE,
    status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE,
    profile_image VARCHAR(255) NULL,
    date_of_birth DATE NULL,
    last_login DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
) ENGINE=InnoDB;

-- create roles table
CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) UNIQUE NOT NULL,
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- create permissions table
CREATE TABLE permissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT NULL
) ENGINE=InnoDB;

-- create user_roles table
CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create role_permissions table
CREATE TABLE role_permissions (
    role_id INT NOT NULL,
    permission_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (role_id, permission_id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permissions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create tenants table
CREATE TABLE tenants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    income_proof VARCHAR(255) NULL,
    occupation VARCHAR(255) NULL,
    credit_score SMALLINT CHECK (credit_score BETWEEN 300 AND 850),
    employment_status ENUM('Employed', 'Unemployed', 'Self-Employed', 'Student', 'Retired') NOT NULL,
    rental_history TEXT NULL,
    verified BOOLEAN NULL,
    date_of_birth DATE NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create landlords table
CREATE TABLE landlords (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    property_count SMALLINT DEFAULT 0,
    verified BOOLEAN DEFAULT FALSE,
    license_no VARCHAR(50) UNIQUE NULL,
    tax_id VARCHAR(20) NULL,
    profile_completed BOOLEAN NULL,
    average_rating DECIMAL(3,2) NULL,
    total_reviews INT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create admins table
CREATE TABLE admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT UNIQUE NOT NULL,
    role ENUM('super_admin', 'moderator', 'finance') NOT NULL,
    permissions JSON NOT NULL,
    status ENUM('active', 'inactive', 'suspended') NULL,
    last_login TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create properties table
CREATE TABLE properties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    landlord_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    location VARCHAR(255) NOT NULL,
    status ENUM('available', 'rented', 'pending') DEFAULT 'available',
    property_type ENUM('apartment', 'house', 'villa', 'studio') NOT NULL,
    size_sqft INT NOT NULL,
    bedrooms TINYINT UNSIGNED NOT NULL,
    bathrooms TINYINT UNSIGNED NOT NULL,
    is_furnished BOOLEAN NULL,
    amenities JSON NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    images JSON NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create address
CREATE TABLE address (
  address_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  address VARCHAR(50) NOT NULL,
  address2 VARCHAR(50) DEFAULT NULL,
  district VARCHAR(20) NOT NULL,
  city_id SMALLINT UNSIGNED NOT NULL,
  postal_code VARCHAR(10) DEFAULT NULL,
  phone VARCHAR(20) NOT NULL,
  /*!50705 location GEOMETRY NOT NULL,*/
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (address_id),
  KEY idx_fk_city_id (city_id),
  /*!50705 SPATIAL KEY `idx_location` (location),*/
  CONSTRAINT `fk_address_city` FOREIGN KEY (city_id) REFERENCES city (city_id) ON DELETE RESTRICT ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- create favorites
CREATE TABLE favorites (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    property_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,
    UNIQUE KEY unique_favorite (tenant_id, property_id) -- Prevents duplicate entries
) ENGINE=InnoDB;

-- create visit_requests table
CREATE TABLE visit_requests (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    property_id INT NOT NULL,
    landlord_id INT NOT NULL,
    visit_date DATETIME NOT NULL,
    status ENUM('pending', 'approved', 'rejected', 'completed') DEFAULT 'pending',
    visit_mode ENUM('in_person', 'virtual') NOT NULL,
    comments TEXT NULL,
    cancellation_reason TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create rental_applications table
CREATE TABLE rental_applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    property_id INT NOT NULL,
    landlord_id INT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    application_documents JSON NULL,
    reason_for_rejection TEXT NULL,
    tenant_message TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create lease_agreements table
CREATE TABLE lease_agreements (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    landlord_id INT NOT NULL,
    property_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'expired', 'terminated') DEFAULT 'active',
    rent_amount DECIMAL(10,2) NOT NULL,
    payment_schedule ENUM('monthly', 'quarterly', 'yearly') DEFAULT 'monthly',
    deposit_amount DECIMAL(10,2) DEFAULT 0.00,
    agreement_doc VARCHAR(255) NULL,
    termination_reason TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create payments table
CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    landlord_id INT NOT NULL,
    property_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_method ENUM('credit_card', 'debit_card', 'bank_transfer', 'paypal') NOT NULL,
    transaction_id VARCHAR(100) UNIQUE,
    receipt_url VARCHAR(255) NULL,
    notes TEXT NULL,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create transactions table
CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tenant_id INT NOT NULL,
    landlord_id INT NOT NULL,
    property_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL CHECK (amount > 0),
    payment_method ENUM('credit_card', 'debit_card', 'bank_transfer', 'paypal') NOT NULL,
    type ENUM('rent', 'deposit', 'refund', 'late_fee') NOT NULL,
    status ENUM('pending', 'completed', 'failed') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tenant_id) REFERENCES tenants(id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create reviews table
CREATE TABLE reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    reviewer_id INT NOT NULL,
    reviewed_id INT NOT NULL,
    property_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review_images VARCHAR(255) NULL,
    comment TEXT NULL,
    review_type ENUM('tenant', 'landlord', 'property') NOT NULL,
    flagged BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reviewer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (reviewed_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- create notifications table
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    type ENUM('payment', 'visit', 'approval', 'other') NOT NULL,
    link VARCHAR(255) NULL,
    status ENUM('unread', 'read') NOT NULL DEFAULT 'unread',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;



-- ✅ Check if tables exist
SHOW TABLES;

-- ✅ Check table structure
DESC users;
DESC roles;
DESC permissions;

-- ✅ Check foreign key constraints
SELECT TABLE_NAME, CONSTRAINT_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = 'rentify' AND REFERENCED_TABLE_NAME IS NOT NULL;






















































CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_no VARCHAR(15) UNIQUE,
    identity_verified BOOLEAN DEFAULT FALSE,
    profile_image VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE 
);


CREATE TABLE roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(20) UNIQUE NOT NULL,
    -- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE
);


CREATE TABLE properties (
    property_id INT PRIMARY KEY AUTO_INCREMENT,
    landlord_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    location_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    deposit DECIMAL(10,2) NOT NULL,
    property_type ENUM('flat', 'house', 'plot', 'commercial') NOT NULL,
    bhk_type ENUM('1BHK', '2BHK', '3BHK', '4BHK', '5BHK') NULL,
    bathrooms TINYINT UNSIGNED NOT NULL,
    size_sqft INT NULL,
    images VARCHAR(255) NULL,
    status ENUM('available', 'rented', 'pending') DEFAULT 'available',
    description TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (landlord_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (location_id) REFERENCES locations(location_id) ON DELETE CASCADE
);


CREATE TABLE locations (
    location_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    property_id INT NOT NULL,
    nearby VARCHAR(100) NULL,
    street VARCHAR(100) NOT NULL,
    locality VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(50) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);


CREATE TABLE favourites (
    user_id INT NOT NULL,
    property_id INT NOT NULL,
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, property_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);


CREATE TABLE visit_request (
    visit_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    property_id INT NOT NULL,
    landlord_id INT NOT NULL,
    req_visit_date DATE NOT NULL,
    visit_date DATE NULL,
    visit_status ENUM('pending', 'approved', 'rejected', 'completed') DEFAULT 'pending',
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    visit_mode ENUM('in_person', 'virtual') NOT NULL,
    comments TEXT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES users(user_id) ON DELETE CASCADE
);


CREATE TABLE rental_application (
    rental_app_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    property_id INT NOT NULL,
    landlord_id INT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    reason_for_rejection TEXT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES users(user_id) ON DELETE CASCADE
);


CREATE TABLE notifications (
    notifi_id INT PRIMARY KEY AUTO_INCREMENT,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    property_id INT NOT NULL,
    message TEXT NOT NULL,
    type ENUM('payment', 'visit', 'approval', 'other') NOT NULL,
    status TINYINT(1) DEFAULT 0, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);


CREATE TABLE lease_agreements (
    agreement_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    landlord_id INT NOT NULL,
    property_id INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'expired', 'terminated') DEFAULT 'active',
    rent_amount DECIMAL(10,2) NOT NULL,
    deposit_amount DECIMAL(10,2) DEFAULT 0.00,
    agreement_doc VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    termination_reason TEXT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);


CREATE TABLE payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    landlord_id INT NOT NULL,
    property_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    payment_method ENUM('credit_card', 'debit_card', 'bank_transfer', 'paypal') NOT NULL,
    transaction_id VARCHAR(100) UNIQUE NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (landlord_id) REFERENCES landlords(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);


CREATE TABLE reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    property_id INT NOT NULL,
    rating TINYINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(property_id) ON DELETE CASCADE
);
