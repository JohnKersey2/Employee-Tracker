const inquirer = require('inquirer')
const mysql = require('mysql2')


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
