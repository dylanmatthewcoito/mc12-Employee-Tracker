
INSERT INTO departments (name) VALUES
  ('Marketing'),
  ('Research and Development'),
  ('Human Resources'),
  ('Operations');


INSERT INTO roles (title, salary, department_id) VALUES
  ('Marketing Manager', 90000, 1),
  ('Marketing Coordinator', 60000, 1),
  ('Research Scientist', 80000, 2),
  ('Software Developer', 100000, 2),
  ('HR Manager', 95000, 3),
  ('HR Specialist', 70000, 3),
  ('Operations Manager', 110000, 4),
  ('Operations Analyst', 85000, 4);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'Emily', 'Johnson', 1, NULL),
  (2, 'Michael', 'Davis', 2, 1),
  (3, 'Jessica', 'Smith', 3, NULL),
  (4, 'David', 'Wilson', 4, 3),
  (5, 'Sarah', 'Thompson', 5, NULL),
  (6, 'Robert', 'Anderson', 6, 5),
  (7, 'Jennifer', 'Martinez', 7, NULL),
  (8, 'Christopher', 'Taylor', 8, 7);