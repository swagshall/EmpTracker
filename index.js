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
  // console.log(`Connected to the emps_db database.`)
);

connection.connect(function (err) {
  if (err) throw err
  // console.log("Connected as Id" + connection.threadId)
  index();
})



//cre8ting the index function 
function index() {
  // console.log('in menu funtion');
  inquirer
    .prompt({
      name: "index",
      type: "list",
      message: "What would you like to do?",
      choices: ["View All Employees", "Add Employee", "Remove Employee", "Update Employee Role",
        "View All Roles", "Add Role", "View all Department", "Add Department", "Remove Department",
        "View all Employees", "Quit"]
    })
    .then(function (ans) {
      switch (ans.index) {
        case "View All Employees":
          viewAllEmployees();
          // console.log("choice made")
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

        case "View all Department":
          // console.log("hiiiii")
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
  // console.log("in viewAllEmployees()");
  connection.query("SELECT emps.firstName, emps.lastName, roles.title, roles.salary, departments.name AS department, CONCAT(emps.firstName, ' ' ,emps.lastName) AS Manager FROM emps INNER JOIN roles on roles.id = emps.role_id INNER JOIN departments on departments.id = roles.dep_id left join emps e on emps.manager_id = e.id;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      index()
    })
}

//----addEmps()------
function addEmps() {

  connection.query("SELECT * FROM roles", function (err, resRole) {

    // console.log("here")

             inquirer
                .prompt([
                    {
                        name: "firstName",
                        type: "input",
                        message: "What is the employee's first name?"
                    },
                    {
                        name: "lastName",
                        type: "input",
                        message: "What is the employee's last name?"
                    },
                    {
                        name: "role",
                        type: "list",
                        message: "What is the employee's role?",
                        choices: function () {
                            roleArray = []
                            for (var i = 0; i < resRole.length; i++) {
                                roleArray.push({ name: resRole[i].title, value: resRole[i].id }); // roleres
                            }

                            return roleArray;
                        }
                    }
                ])

                .then(function (answer) {

                                  connection.query(
                                      `INSERT INTO emps SET ?`,
                                      {
                                          firstName: answer.firstName,
                                          lastName: answer.lastName,
                                          role_id: answer.role,
                                      },
                                      function(err, res) {
                                        if (err) throw err
                                        console.table(res)
                                        index()
                                      }
                                  );
              
                            

  
  });
});
}
//----removeEmps()---
function removeEmps() {
  // console.log("In removeEmps()")

  connection.query("SELECT * FROM emps", function (err, res) {
    if (err) throw err;

    inquirer
        .prompt({
            name: "remove",
            type: "list",
            message: "Which employee would you like to remove?",
            choices: function () {
                var employeeArray = [];
                for (var i = 0; i < res.length; i++) {
                    employeeArray.push({ name: res[i].firstName + " " + res[i].lastName, value: res[i].id });
                }
                return employeeArray;
            }
        })

        .then(function (answer) {

            connection.query(
                "DELETE FROM emps WHERE ?",
                {
                    id: answer.remove
                },

                function(err, res) {
                  if (err) throw err
                  console.table(res)
                  index()
                }
            );
        });
});
}


//----updateEmpRole()---
function updateEmpRole() {
  console.log("In updateEmpRole()")
}

//----viewAllRoles()---
function viewAllRoles() {
  // console.log("In viewAllRoles()")

  connection.query("SELECT id, title, salary FROM roles;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      index()
    })
}

//----addRole()----
function addRole() {
  // console.log("In addRole()")
  inquirer
    .prompt([
    {
      name: "roleName",
      type: "input",
      message: "What is the name of the new role?"
    },
    {
        name: "sal",
        type: "input",
        message: "What is the salary?"
    },
    // {
    //   name: "depId",
    //   type: "checkbox",
    //   message: "Which department?" ,
    //   choices: [
    //     // connection.query("SELECT * FROM departments;")
    //     "Sales",
    //     "Engineering",
    //     "Finance",
    //     "Legal",
    //     "HR",
    //     "CEO",
    //   ]
    // }
      
   ] )

    .then(function (answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: answer.roleName,
          salary: answer.sal,
          // dep_id: answer.depId,
        },
        function (err, res) {
          if (err) throw err
          console.table(res)
          index()
        }
      );
    });
}

//----viewAllDeps()---
function viewAllDeps() {
  // console.log("In viewAllDeps()")

  connection.query("SELECT * FROM departments;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      index()
    })
}


//----addDep()-----
function addDep() {
  // console.log("In addDep()")
  inquirer
    .prompt({
      name: "depName",
      type: "input",
      message: "What is the name of the new department?"
    })

    .then(function (answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.depName,
        },
        function (err, res) {
          if (err) throw err
          console.table(res)
          index()
        }
      );
    });
}

//---removeDep()--
function removeDep() {
  // console.log("In removeDep()")

  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;

    inquirer
        .prompt({
            name: "remove",
            type: "list",
            message: "Which department would you like to remove?",
            choices: function () {
                var depArray = [];
                for (var i = 0; i < res.length; i++) {
                    depArray.push({ name: res[i].name, value: res[i].id });
                }
                return depArray;
            }
        })

        .then(function (answer) {

            connection.query(
                "DELETE FROM departments WHERE ?",
                {
                    id: answer.remove
                },

                function(err, res) {
                  if (err) throw err
                  console.table(res)
                  index()
                }
            );
        });
});
  
}

 
