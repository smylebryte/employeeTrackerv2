const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Spencer23!",
  database: "employeeTracker_DB",
});

const start = () => {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Employees",
        "View Departments",
        "View Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.choice) {
        case "View Employees":
          return viewEmployees();
          break;
        case "View Departments":
          return viewDepartments();
          break;
        case "View Roles":
          return viewRoles();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Employee Role":
          updateRole();
          break;
      }
    });
};

function viewEmployees() {
  const query = `SELECT * FROM employeeTracker_DB.employee`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewDepartments() {
  const query = `SELECT * FROM employeeTracker_DB.department`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewRoles() {
  const query = `SELECT * FROM employeeTracker_DB.employee_role`;
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.table(results);
    start();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the employee's role ID?",
      },
      {
        name: "manager",
        type: "input",
        message: "What is the employee's manager ID?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role,
          manager_id: answer.manager,
        },
        (err) => {
          if (err) throw err;
          console.log("The employee was added successfully!");
          start();
        }
      );
    });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "department_name",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        {
          departmnet_name: answer.department_name,
        },
        (err) => {
          if (err) throw err;
          console.log("The department was added successfully!");
          start();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "What title would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this title?",
      },
      {
        name: "department_id",
        type: "input",
        message: "What is the department id for this title?",
      },
    ])
    .then((answer) => {
      connection.query(
        "INSERT INTO employee_role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department_id,
        },
        (err) => {
          if (err) throw err;
          console.log("The role was added successfully!");
          start();
        }
      );
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        name: "role_update",
        type: "input",
        message: "What is the new role id?",
      },
      {
        name: "employee_id",
        type: "input",
        message: "What is the employee id?",
      },
    ])
    .then((answer) => {
      connection.query(
        "UPDATE employee SET ? WHERE ?",
        {
          role_id: answer.role_update,
        },
        {
          employee_id: answer.employee_id,
        },
        (err) => {
          if (err) throw err;
          console.log("The role was updated successfully!");
          start();
        }
      );
    });
}

start();
