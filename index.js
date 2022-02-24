const mysql = require('mysql2');
const inquirer = require("inquirer");
const consTable = require('console.table');

// console.log("hiiii");

//cr8 the connection to the sql db
const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
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
  .then(function(ans) {
    switch (ans.index) {
        case "View All Employees":
          viewAllEmployees();
          console.log("choice made")
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
  //----viewAllEmployees()-----
  function viewAllEmployees() {
      console.log("in viewAllEmployees()");
      connection.query("SELECT emps.firstName, emps.lastName, roles.title, roles.salary, departments.name, CONCAT(emps.firstName, ' ' ,emps.lastName) AS Manager FROM emps INNER JOIN roles on roles.id = emps.role_id INNER JOIN departments on departments.id = roles.dep_id left join emps e on emps.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      index()
  })
  }

  //----addEmps()------
  function addEmps() {
      console.log("In addEmps()");
  }

  //----removeEmps()---
  function removeEmps() {
      console.log("In removeEmps()")
  }

  //----updateEmpRole()---
  function updateEmpRole() {
      console.log("In updateEmpRole()")
  }

  //----viewAllRoles()---
  function viewAllRoles() {
      console.log("In viewAllRoles()")

      connection.query("SELECT id, title, salary FROM roles",
      function(err, res) {
        if (err) throw err
        console.table(res)
        index()
    })
  }

  //----addRole()----
  function addRole() {
      console.log("In addRole()")
  }

  //----viewAllDeps()---
  function viewAllDeps() {
      console.log("In viewAllDeps()")
      connection.query("SELECT * FROM departments",
      function(err, res) {
        if (err) throw err
        console.table(res)
        index()
    })
  }

  //----addDep()-----
  function addDep() {
      console.log("In addDep()")
  }

  //---removeDep()--
  function removeDep() {
      console.log("In removeDep()")
  }

  //----addEmps()---
  function addEmps() {
      console.log("In addEmps()")
  }

  