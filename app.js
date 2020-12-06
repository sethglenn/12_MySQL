const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    initPrompt();
})

function initPrompt() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Add Employees",
                "Add Departments",
                "Add Roles",
                "Update Employee Role",
                "exit"
            ]

        })
}