DROP DATABASE IF EXISTS employeeInfo_db;
CREATE DATABASE employeeInfo_db;

USE employeeInfo_db;

CREATE TABLE departments(
    id: INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name: VARCHAR(30 NOT NULL)
);

CREATE TABLE roles(
    id: INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title: VARCHAR(30) NOT NULL,
    salary: DECIMAL NOT NULL,
    department_id: INT
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees(
    id: INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name: VARCHAR(30),
    last_name: VARCHAR(30),
    role_id: INT,
    manager_id: INT
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
);