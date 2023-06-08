INSERT INTO department (department_name)
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Salesperson", 35000, 1),
    ("Outside Sales Rep", 45000, 1),
    ("Sales Manager", 85000, 1),
    ("Engineer", 110000, 2),
    ("Engineering Manager", 140000, 2),
    ("Financial Analyst", 85000, 3),
    ("Financial Manager", 110000, 3),
    ("Paralegal", 40000, 4),
    ("Lawyer", 125000, 4);
;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Marcus", "Strictland", 1, null),
    ("Mike", "Chan", 1, null),
    ("Ashley", "Rodriguez", 2, null),
    ("Kevin", "Tupik", 3, 1),
    ("Kunal", "Singh", 4, null),
    ("Malia", "Brown", 4, null),
    ("Sarah", "Lourd", 5, 2),
    ("Tom", "Allen", 6, null),
    ("Patrick", "Green", 7, 3),
    ("Bilal", "Hadi", 8, null),
    ("Matthew", "Nguyen", 9, 4);