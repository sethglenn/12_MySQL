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



        })


};

function searchDept(){
    connection.query("SELECT * from department", function (err, res) {
        if (err) throw err;
        console.table(res);
        initPrompt();
    })
}

function viewAll(){
    connection.query("SELECT employee.employee_id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.role_id LEFT JOIN department on role.department_id = department.department_id LEFT JOIN employee manager on manager.manager_id = employee.manager_id;",
        function(err, res) {
            if (err) throw err;
            console.table(res);
            initPrompt();
        }
    );
};

function searchEmp(){
    connection.query("SELECT * from role", function(err, res){
        if (err) throw err;
        console.table(res);
        initPrompt();
    })
}