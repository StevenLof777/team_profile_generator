const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises

const generateHTML = ({employee}) => {
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./styles-reset-demo.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ddeafb3003.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./styles-demo.css">
      <title>Demo</title>
  </head>
  <body>
      <header class="my-header">
          <h1 class="title">My Team</h1>    
      </header>
  
      <div class="container card-container">
          <div class="row card-row justify-content-md-center">
          ${employee}   
          </div>
      </div>
  </body>
  </html>`;
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the employee's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the employee's id?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    },
    {
    type: 'list',
    choices: ['Engineer', 'Manager', 'Intern'], 
    name: 'role',
    message: 'Which role does this employee have?'
    }]).then((answers) => {
      const htmlContent = generateHTML(answers);
      fs.appendFile('index.html', htmlContent, (err) =>
      err ? console.error(err) : console.log('index.html generated.')
    });


    // Asks if there are any more employees the user wants to add
    inquirer.prompt([
    {
      type: "confirm",
      name: "moreRoles",
      message: "Are there anymore roles you would like to add?",
      },
      
    // Engineer
    {
    type: "confirm",
    name: "engineer",
    message: "Is the employee an engineer?",
    },
    {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub user name?",
    },
    // Intern
    {
    type: "confirm",
    name: "intern",
    message: "Is the employee and Intern?",
    },
    {
    type: "input",
    name: "school",
    message: "What school does the intern go too?",
    },
    // Manager
    {
    type: "confirm",
    name: "manager",
    message: "Is the employee an manager?",
    },
    {
    type: "input",
    name: "officeNumber",
    message: "What is the office number for the manager?",
    },
  ]).then((answers) => {
    const htmlContent = generateHTML(answers);
    fs.appendFile('index.html', htmlContent, (err) =>
    err ? console.error(err) : console.log('index.html generated.')
    );
    })};
