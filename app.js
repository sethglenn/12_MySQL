const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");

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
        .then(function (answer) {
            switch (answer.action) {
                case "View all Employees":
                    searchAll();
                    break;
                case "View all Departments":
                    searchDept();
                    break;
                case "View all Roles":
                    searchEmp();
                    break;
                case "Add Employees":
                    addEmployee();
                    break;
                case "Add Departments":
                    addDept();
                    break;
                case "Add Roles":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "exit":
                    connection.end();
                    break;
            }


        })
};
function searchDept() {
    connection.query("SELECT * from department", function (err, res) {
        if (err) throw err;
        console.table(res);
        initPrompt();
    })
};
function searchAll() {
    connection.query("SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, FROM employee LEFT JOIN role on employee.role_id = roles.role_id LEFT JOIN department on roles.department_id = department.department_id;",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            initPrompt();
        }
    );
};
function searchEmp() {
    connection.query("SELECT * from roles", function (err, res) {
        if (err) throw err;
        console.table(res);
        initPrompt();
    })
};
function addEmployee() {
    let questions = [
        {
            type: "input",
            message: "What's the employee's first name?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What's the employee's last name?",
            name: "last_name"
        },
        {
            type: "input",
            message: "What's the employee's title (role_id)?",
            name: "titleID"
        },
    ];
    inquirer.prompt(questions).then(function (answer) {
        connection.query("INSERT INTO employee SET ?",
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.titleID,
            },
            function (err) {
                if (err) throw err;
                searchAll();
            }
        );
    });
};
function addDept() {
    inquirer.prompt({
        type: "input",
        message: "What would you like to name the new department?",
        name: "department"
    })
        .then(function (answer) {
            connection.query("INSERT INTO department SET ?",
                {
                    name: answer.department,
                },
                function (err, res) {
                    if (err) throw err;
                    initPrompt();
                }
            );
        });
};
function addRole() {
    let questions = [
        {
            type: "input",
            message: "What type of role would you like to add?",
            name: "title"
        },
        {
            type: "input",
            message: "In what department is the new role?",
            name: "id"
        },
        {
            type: "list",
            message: "What is the salary for this role?",
            name: "salary"
        }
    ];
    inquirer.prompt(questions).then(function (answer) {
        connection.query("INSERT INTO roles SET ?",
            {
                title: answer.title,
                department_id: answer.id,
                salary: answer.salary
            },
            function (err, res) {
                if (err) throw err;
                initPrompt();
            }
        );
    });
};
function updateRole() {
    let employees = searchAll();
    let choices = employees.map(data => {
        value: data.id,
        name: data.id
    })
    inquirer.prompt({
        type: "list",
        name: "role id",
        message: "Which role would you like to assign to the employee?",
        choices: choices
    })
    connection.query("UPDATE employee SET roles_id = ? WHERE employee_id = ?", [rolesID, empID])
};