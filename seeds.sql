INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES (1, "Mary", "Smiley", 1, 1), (2, "Charles", "Burke", 2, 1), (3, "Iris", "Johnson", 3, 2), (4, "Nathan", "Smith", 4, 3), (5, "John", "Howard", 4, 4), (6, "Stephanie", "Patterson", 4, 4), (7, "Samantha", "Harper", 6, 5), (8, "Laura", "Chapman", 7, 5), (9, "Ellen", "Wilder", 7, 6), (10, "Lauren", "Doe", 5, 5);

INSERT INTO department (department_id, departmnet_name)
VALUES (1, "Marketing"), (2, "Finance"), (3, "Engineering"), (4, "Operations"), (5, "IT"), (6, "Human Resources"), (7, "Administrative");

INSERT INTO employee_role (role_id, title, salary, departmnet_id)
VALUES (1, 'Marketing Associate', 70000, 1), (2, 'Accountant', 80000, 2), (3, 'Engineer', 90000, 3), (4, 'Operations Manager', 75000, 4), (5, 'Technician', 90000, 5), (6, 'HR Associate', 65000, 6), (7, 'Admin Asst', 45000, 7);