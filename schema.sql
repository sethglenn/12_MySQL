DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    roles_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT

);

CREATE TABLE employee (
    employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT

);

INSERT INTO department (name)
VALUES ("Service"), ("Sales"), ("Parts"), ("Management");

INSERT INTO roles (title, salary, department_id)
VALUES ("Service Writer", 45000, 1);
INSERT INTO roles (title, salary, department_id)
VALUES ("Mechanic", 55000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jane", "Doe", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Myer", 1);