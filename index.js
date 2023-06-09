// Imports required packages
const inquirer = require('inquirer')
const mysql = require('mysql2')
const consoleTable = require('console.table')

// create connection to mysql
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

// main function which runs core application
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

// following functions allow users to see data or update data. 
viewAllDepartments = () => {
    db.query("SELECT * FROM department", (err, result) => {
      console.table(result);
    });
  };

viewAllRoles = () => {
    db.query(
      "SELECT department.*, role.*, role.id AS role_id FROM role INNER JOIN department on role.department_id = department.id",
      (err, result) => {
        console.table(result);
      }
    );
  };
  
viewAllEmployees = () => {
    db.query(
      `SELECT e.id AS "Employee ID", 
    e.first_name AS "First Name",
    e.last_name AS "Last Name",
    role.title AS "Role Title",
    department.name AS "Department",
    role.salary AS "Salary",
    CONCAT(m.first_name, ' ', m.last_name) AS "Manager Name"
    FROM employee e
    LEFT JOIN role ON e.role_id = role.id
    LEFT JOIN employee m ON m.id = e.manager_id
    LEFT JOIN department ON role.department_id = department.id
  `,
      (err, result) => {
        console.table(result);
      }
    );
  };
  
addDepartment = async () => {
    const departmentquestions = {
      name: "name",
      type: "input",
      message: "enter department name",
    };
  
    let answer = await inquirer.prompt(departmentquestions);
    let departmentname = answer.name;
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      [departmentname],
      (err, result) => {
        console.log("department added");
        console.log(err);
      }
    );
  };
  
addRole = async () => {
    const rolequestions = [
      {
        name: "role",
        type: "input",
        message: "enter role",
      },
      {
        name: "salary",
        type: "input",
        message: "enter salary",
      },
      {
        name: "department",
        type: "input",
        message: "enter department_id",
      },
    ];
  
    let answer = await inquirer.prompt(rolequestions);
    db.query(
      "INSERT INTO role (title, salary, department_id) VALUES (?,?,?)",
      [answer.role, answer.salary, answer.department],
      (err, result) => {
        console.log("role added");
      }
    );
  };
  
addEmployee = async () => {
    const employeequestion = [
      {
        name: "firstname",
        type: "input",
        message: "enter first name",
      },
      {
        name: "lastname",
        type: "input",
        message: "enter last name",
      },
      {
        name: "role",
        type: "input",
        message: "enter role id",
      },
      {
        name: "manager",
        type: "input",
        message: "enter manager id",
      },
    ];
    let answer = await inquirer.prompt(employeequestion);
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)",
      [answer.firstname, answer.lastname, answer.role, answer.manager],
      (err, result) => {
        console.log("employee added");
        console.log(err);
      }
    );
  };
  
updateEmployeeRole = () => {
    db.query("SELECT * FROM employee", async (err, result) => {
      let employeeid = [];
  
      for (let i = 0; i < result.length; i++) {
        employeeid.push(result[i].id);
  
      }
      let question = [
          {
            name: "employeeid",
            type: "list",
            choices: employeeid,
            message: "select employee id"
          },
          {
              name: "role",
              type: "input",
              message: "enter role id"
            }
        ];
        let answer = await inquirer.prompt(question)
        db.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.role, answer.employeeid], (err, result) => {
          console.log("employee role updated");
        })
    });
  };

function exit() {
    process.exit();
}

// calls function to start application
init()