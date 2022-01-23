// Separate Out the switch cases from the employee functions 

// To summarize the issue, you are having several objects  ( in fact several objectTypes) in your employeesArr.  So for some object Types such as Manager and Engineer getSchool is not a valid function, that is the what the error is complaining about

// To summarize the issue, you are having several objects  ( in fact several objectTypes) in your employeesArr.  So for some object Types such as Manager and Engineer getSchool is not a valid function, that is the what the error is complaining about

// One hint to do that would be to filter out those array elements in the for loop using getRole() == 'Intern' for example, similarly for Engineer and Manager


const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');
let employeesArr = [];
let HTML = [
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href='./styles-reset-demo.css'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/ddeafb3003.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./styles-demo.css">
    <title>Demo</title>
</head>
<body>
    <header class="my-header">
        <h1 class="title">My Team</h1>    
    </header>`
]

// Manager prompt
const manager = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the manager's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the manager's id?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
    },
    {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    },
    {
    type: "list",
    choices: ['Yes', 'No'],
    name: "moreRoles",
    message: "Would you like to add people to your team?",
    }
    ]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeesArr.push(manager);
    switch(answers.moreRoles) {
      case 'Yes':
        findRole()
        break;
      case 'No':
      default:
        makeMCard()
        generateHTML()
    }
  })
}
manager();

const findRole = () => {
  inquirer.prompt([
    {
    type: 'list',
    choices: ['Engineer', 'Intern'], 
    name: 'role',
    message: 'Would you like to add an engineer or an intern?'
    }
  ]).then((answers) => {
    switch(answers.role) {
      case 'Engineer':
        engineer();
        break;
      case 'Intern':
        intern();
        break;
      default:
        return;
    }
  })
}

// Engineer prompt
const engineer = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the engineer's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the engineer's id?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
    },
    {
    type: "input",
    name: "gitHub",
    message: "What is the engineer's GitHub user name?",
    },
    {
    type: "list",
    choices: ['Yes', 'No'],
    name: "moreRoles",
    message: "Are there anymore roles you would like to add?",
    }
    ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
    employeesArr.push(engineer)
    switch(answers.moreRoles) {
      case 'Yes':
        findRole()
        break;
      case 'No':
      default:
        makeECard();
        generateHTML()
    }
  })
}

// Intern prompt
const intern = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is the intern's name?",
    },
    {
    type: 'input',
    name: 'id',
    message: "What is the intern's id?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
    },
    {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
    },
    {
    type: "list",
    choices: ['Yes', 'No'],
    name: "moreRoles",
    message: "Are there anymore roles you would like to add?",
    }
    ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employeesArr.push(intern)
    switch(answers.moreRoles) {
      case 'Yes':
        findRole()
        break;
      case 'No':
      default:
        makeICard()
        generateHTML()
    }
  })
}

// Engineer Card
const eCard = (name, id, email, gitHub, role) => {
  const eDetails =
  `
    <div class="card employee-card">
    <div class="employee-header">
        <h5 class="card-title employee-name">${name}</h5>
        <h5 class="card-title job-title"><i class="fas fa-mug-hot my-icons"></i>${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
                <p class="card-text detail-text employee-email">Email: ${email}</p>
                <p class="card-text detail-text employee-github">GitHub: ${gitHub}</p>
            </div>
        </div>
    </div>
  `
  HTML.push(eDetails.trim());
  // console.log(HTML);
};

// Intern Card
const iCard = (name, id, email, school, role) => {
  const iDetails =
  `
    <div class="card employee-card">
    <div class="employee-header">
        <h5 class="card-title employee-name">${name}</h5>
        <h5 class="card-title job-title"><i class="fas fas fa-glasses my-icons"></i>${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
                <p class="card-text detail-text employee-email">Email: ${email}</p>
                <p class="card-text detail-text employee-github">School: ${school}</p>
            </div>
        </div>
    </div>
  `
  HTML.push(iDetails.trim());
  // console.log(HTML);
};

// Manger Card
const mCard = (name, id, email, officeNumber, role) => {
  const mDetails =
  `
    <div class="card employee-card">
    <div class="employee-header">
        <h5 class="card-title employee-name">${name}</h5>
        <h5 class="card-title job-title"><i class="fas fa-mug-hot my-icons"></i>${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
                <p class="card-text detail-text employee-email">Email: ${email}</p>
                <p class="card-text detail-text employee-github">Office Number: ${officeNumber}</p>
            </div>
        </div>
    </div>
  `
  HTML.push(mDetails.trim());
  // console.log(HTML);
};

// Make engineer card
const makeECard = () => {
    for (let i = 0; i < employeesArr.length; i++) {
      console.log(employeesArr)
      // console.log(employeesArr[i]); 
      eCard(
        employeesArr[i].getName(),
        employeesArr[i].getId(),
        employeesArr[i].getEmail(),
        employeesArr[i].getGitHub(),
        employeesArr[i].getRole()
      );
  }
}

// Make intern card
const makeICard = () => {
    for (let i = 0; i < employeesArr.length; i++) {
      console.log(employeesArr[i])
      console.log(employeesArr[i].getEmail()); 
      iCard(
        employeesArr[i].getName(),
        employeesArr[i].getId(),
        employeesArr[i].getEmail(),
        employeesArr[i].getSchool(),
        employeesArr[i].getRole()
      );
  }
}

// Make manager card
const makeMCard = () => {
    for (let i = 0; i < employeesArr.length; i++) {
      console.log(employeesArr)
      // console.log(employeesArr[i].getName()); 
      mCard(
        employeesArr[i].getName(),
        employeesArr[i].getId(),
        employeesArr[i].getEmail(),
        employeesArr[i].getOfficeNumber(),
        employeesArr[i].getRole()
      );
  }
}

// Generate HTML
const generateHTML = () => {
  HTML.push(`
  </body>
  </html>
  `)
  console.log(HTML.join(``))
}