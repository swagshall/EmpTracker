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

SELECT * FROM departments;
