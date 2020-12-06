const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Port
    port: 3306,
  
    // Username
    user: "root",
  
    // Password
    password: "password",
    database: "employees_db"
  });

  connection.connect(function (err) {
    if (err) throw err;
  })
