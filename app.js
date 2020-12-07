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
    connection.query("SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;",
        function (err, res) {
            if (err) throw err;
            console.table(res);
            initPrompt();
        }
    );
};

function searchEmp() {
    connection.query("SELECT * from role", function (err, res) {
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





function updateRole() {
    let employees = searchAll();
    let choices = employees.map(index => {
        id: id;
    })
    inquirer.prompt({
        type: "list",
        name: "role id",
        message: "Which role would you like to assign to the employee?",
        choices: choices
    })
    connection.query("UPDATE employee SET role_id = ? WHERE employee_id = ?", [roleID, empID])
};