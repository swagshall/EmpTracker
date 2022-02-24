const mysql = require('mysql2');
const inquirer = require("inquirer");
const consTable = require('console.table');

// console.log("hiiii");

//cr8 the connection to the sql db
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'Chemdas.1',
      database: 'emps_db'
    },
    console.log(`Connected to the emps_db database.`)
  );

  //call to index function 
  index();

  //cre8ting the index function 
  function index(){
      console.log('in menu funtion');
      inquirer
        .prompt({
            name: "index",
            type: "list",
            message: "What would you like to do?",
            choices: ["View all Employees","Add Employee",  "Remove an Employee", "Update Employee Role",  
            "View All Roles", "Add a Role", "View all Departments", "Add a Department",  "Remove a Department", 
            "View all Employees",  "Quit"]
        })
  }