//require('dotenv').config()
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_db'
});

// Start the application
async function startApp() {
  const answer = await inquirer.prompt({
    name: 'action',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
      'Exit'
    ]
  });

  switch (answer.action) {
    case 'View all departments':
      await viewAllDepartments();
      break;
    case 'View all roles':
      await viewAllRoles();
      break;
    case 'View all employees':
      await viewAllEmployees();
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    case 'Update an employee role':
      await updateEmployeeRole();
      break;
    case 'Exit':
      connection.end();
      break;
  }
}

// View all departments
async function viewAllDepartments() {
  const [rows] = await connection.query('SELECT * FROM departments');
  console.table(rows);
  startApp();
}

// View all roles
async function viewAllRoles() {
  const query = `
    SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id
  `;
  const [rows] = await connection.query(query);
  console.table(rows);
  startApp();
}

// View all employees
async function viewAllEmployees() {
  const query = `
    SELECT 
      employees.id, 
      employees.first_name, 
      employees.last_name, 
      roles.title, 
      departments.name AS department,
      roles.salary, 
      CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees manager ON employees.manager_id = manager.id
  `;
  const [rows] = await connection.query(query);
  console.table(rows);
  startApp();
}

// Add a department
async function addDepartment() {
  const answer = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Enter the name of the department:'
  });

  await connection.query('INSERT INTO departments SET ?', { name: answer.name });
  console.log('Department added successfully!');
  startApp();
}

// Add a role
async function addRole() {
  const answer = await inquirer.prompt([
    {
      name: 'title',
      type: 'input',
      message: 'Enter the title of the role:'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Enter the salary for the role:'
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'Enter the department ID for the role:'
    }
  ]);

  await connection.query('INSERT INTO roles SET ?', {
    title: answer.title,
    salary: answer.salary,
    department_id: answer.department_id
  });
  console.log('Role added successfully!');
  startApp();
}

// Add an employee
async function addEmployee() {
  const answer = await inquirer.prompt([
    {
      name: 'first_name',
      type: 'input',
      message: "Enter the employee's first name:"
    },
    {
      name: 'last_name',
      type: 'input',
      message: "Enter the employee's last name:"
    },
    {
      name: 'role_id',
      type: 'input',
      message: "Enter the employee's role ID:"
    },
    {
      name: 'manager_id',
      type: 'input',
      message: "Enter the employee's manager ID:"
    }
  ]);

  await connection.query('INSERT INTO employees SET ?', {
    first_name: answer.first_name,
    last_name: answer.last_name,
    role_id: answer.role_id,
    manager_id: answer.manager_id
  });
  console.log('Employee added successfully!');
  startApp();
}

// Update an employee role
async function updateEmployeeRole() {
  const answer = await inquirer.prompt([
    {
      name: 'employee_id',
      type: 'input',
      message: 'Enter the ID of the employee to update:'
    },
    {
      name: 'role_id',
      type: 'input',
      message: 'Enter the new role ID for the employee:'
    }
  ]);

  await connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [
    answer.role_id,
    answer.employee_id
  ]);
  console.log('Employee role updated successfully!');
  startApp();
}

// Start the application
startApp();