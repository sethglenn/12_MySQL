DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department( 
department_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
department_name VARCHAR (30) NOT NULL
);

INSERT INTO department (department_name)
VALUES ("Service"), ("Parts"), ("Sales"), ("Management");

CREATE TABLE roles (
roles_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR (30) NOT NULL,
salary DECIMAL(10, 2) NOT NULL,
department_id INT
);
INSERT INTO roles (title, salary, department_id)
VALUES ("Mechanic", 100000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Service Writer", 80000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Parts Staff", 150000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Inventory Specialist", 125000, 2);
INSERT INTO roles (title, salary, department_id)
VALUES ("Salesman", 160000,3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Manager", 120000, 3);
INSERT INTO roles (title, salary, department_id)
VALUES ("Service Manager", 250000, 4);
INSERT INTO roles (title, salary, department_id)
VALUES ("Parts Manager", 190000, 4);

CREATE TABLE employee(
employee_id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NULL
);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Julian", "Doe", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jerry", "Doe", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ron", "Doe", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ashley", "Doe", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jan", "Doe", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("John", "Doe", 7);
INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Ian", "Doe", 8);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jane", "Doe", 9);
INSERT INTO employee  (first_name, last_name, role_id)
VALUES ("Alex", "Doe", 10);