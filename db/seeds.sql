INSERT INTO departments (name)
VALUES
('Front of House'),
('Back of House'),
('Maintenance'),
;

INSERT INTO roles (title, salary, department_id)
VALUES
('Waitress', 90000, 1),
('Line Cook', 100000, 2),
('Busser', 70000, 3),
;
SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Trevor', 'Moore', 1, NULL)
('Bilal', 'Johnson', 2, NULL)
('Crystal', 'Green', 3, NULL)
('Marcus', 'Strictland', 3, NULL)
('Joseph', 'Tan', 3, 1)
('Angel', 'Hernandez', 3, 2)
('Fatima', 'Hadi', 2, 3)
('Sarah', 'Brown', 1, 3)
;

SELECT * FROM employees;