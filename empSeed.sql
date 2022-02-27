USE emps_db;

-- Adding the deps
INSERT INTO departments (name)
VALUE ("Sales");
INSERT INTO departments (name)
VALUE ("Engineering");
INSERT INTO departments (name)
VALUE ("Finance");
INSERT INTO departments (name)
VALUE ("Legal");


-- roles
INSERT INTO roles (title, salary, dep_id)
VALUES ("Accountant", 50000, 3);
INSERT INTO roles (title, salary, dep_id)
VALUES ("Back-end Developer", 1000000, 2);
INSERT INTO roles (title, salary, dep_id)
VALUES ("Sales-men", 45000, 1);
INSERT INTO roles (title, salary, dep_id)
VALUES ("Lawyer", 150000, 4);

-- emps 
INSERT INTO emps (firstName, lastName, role_id)
VALUES ("Miles", "Kay", 1);
INSERT INTO emps (firstName, lastName, role_id)
VALUES ("Sam", "Martin", 2);
INSERT INTO emps (firstName, lastName, role_id)
VALUES ("Larry", "Smith", 3);
INSERT INTO emps (firstName, lastName, role_id)
VALUES ("John", "Brown", 4);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM emps;

