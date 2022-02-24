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
            choices: ["View All Employees","Add Employee",  "Remove an Employee", "Update Employee Role",  
            "View All Roles", "Add a Role", "View all Departments", "Add a Department",  "Remove a Department", 
            "View all Employees",  "Quit"]
        })
  .then(function(choice) {
    switch (choice) {
        case "View All Employees":
          viewAllEmployees();
        break;

        case "Add Employee":
          addEmps();
        break;
        
        case "Remove Employee":
          removeEmps();
        break;

        case "Update Employee Role":
          updateEmpRole();
        break;
        
        case "View All Roles":
          viewAllRoles();
        break;

        case "Add Role":
            addRole();
        break;

        case "View All Department":
            viewAllDeps();
        break;

        case "Add Department":
            addDep();
        break;

        case "Remove Department":
          removeDep();
        break;

        case "Add Employee":
            addEmps();
        break;
        
        case "Quit":
            console.log("Program Ended");
            connection.end();
        break;

        }
});
  }


  //functions for each switch case 
  
