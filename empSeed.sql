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

-- emps 
INSERT INTO emps (firstName, lastName, role_id)
VALUES ("Miles", "Kay", 1);



SELECT * FROM departments;
