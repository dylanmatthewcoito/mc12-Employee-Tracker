# Module 12 Challenge: SQL Employee Tracker

## Description

The Employee Tracker is a command-line application that allows you to manage a company's employee database. It provides functionality to view, add, and update departments, roles, and employees in the database.

## Video Walkthrough Link 

https://drive.google.com/file/d/1YNZgBrurjhsFo2nZmM70UuFDCK5S9e_t/view

## Features

- View all departments, roles, and employees
- Add new departments, roles, and employees
- Update an employee's role

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/employee-tracker.git
   ```

2. Navigate to the project directory:
   ```
   cd employee-tracker
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up the database:
   - Create a MySQL database named `employee_db`
   - Update the database connection details in `index.js` with your MySQL credentials

5. Run the schema and seed files:
   - Open MySQL Workbench or the MySQL command-line client
   - Run the SQL statements in `schema.sql` to create the necessary tables
   - (Optional) Run the SQL statements in `seeds.sql` to populate the database with sample data

## Usage

1. Start the application:
   ```
   node index.js
   ```

2. Use the arrow keys to navigate through the options in the command-line menu.

3. Select an option by pressing Enter:
   - "View all departments" displays a table of all departments
   - "View all roles" displays a table of all roles with their corresponding departments and salaries
   - "View all employees" displays a table of all employees with their roles, departments, salaries, and managers
   - "Add a department" prompts you to enter the name of a new department and adds it to the database
   - "Add a role" prompts you to enter the title, salary, and department for a new role and adds it to the database
   - "Add an employee" prompts you to enter the first name, last name, role, and manager for a new employee and adds them to the database
   - "Update an employee role" prompts you to select an employee and update their role
   - "Exit" closes the database connection and exits the application

4. Follow the prompts to input the necessary information for each action.

5. The application will display the results of each action and return to the main menu.

![MySQL Employee Tracker](https://github.com/dylanmatthewcoito/mc12-Employee-Tracker/assets/71201051/823ad0bd-9b8c-452a-a1cd-bf98758cec9b)
