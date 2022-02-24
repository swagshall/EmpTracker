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