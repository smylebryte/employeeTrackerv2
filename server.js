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
        "Update Department",
        "Update Role",
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
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Add Employee":
          addEmployee();
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

start();
