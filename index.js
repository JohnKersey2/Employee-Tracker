const inquirer = require('inquirer')
const mysql = require('mysql2')
const consoleTable = require('console.table')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employees_db',
        // user: process.env.DB_USER,
        // password: process.env.DB_PW,
        // database: process.env.DB_NAME
    },
    console.log ('Connected to the employees_db database')
);

function init() {
    inquirer.prompt ({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee's Role",
            "Exit"
        ],
    })
    .then((answer) => {
        switch (answer.menu) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee's Role":
                updateEmployeeRole();
                break;
            case "Exit":
                exit();
        }
    });
}

let viewAllDepartments = () => {
    db.query("SELECT * FROM department", (err, result) => {
      console.table(result);
    });
    // init()
  };

  function exit() {
    process.exit();
}

init()