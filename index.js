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
    <link rel="stylesheet" href='reset.css'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/ddeafb3003.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles.css">
    <title>Demo</title>
</head>
<body>
    <header class="my-header">
        <h1 class="title">My Team</h1>    
    </header>
    <div class="container card-container">
        <div class="row card-row justify-content-md-center">
`
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
        makeMCard();
        findRole();
        break;
      case 'No':
      default:
        // console.log(employeesArr)
        generateHTML()
    }
  })
}
manager();

// Asks user for role
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
        makeECard();
        findRole();
        break;
      default:
        makeECard();
        generateHTML();
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
        makeICard();
        findRole();
        break;
      case 'No':
      default:
        makeICard();
        generateHTML();
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
        <h5 class="card-title job-title"><i class="fas fa-glasses my-icons"></i> ${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
               <p class="card-text detail-text employee-email">Email:  <a href="mailto:${email}">${email}</a></p>
                <p class="card-text detail-text employee-github">GitHub: <a href="https://github.com/${gitHub}" target="_">${gitHub}</a></p>
            </div>
        </div>
    </div>
  `
  HTML.push(eDetails);
  // console.log(HTML);
};

// Intern Card
const iCard = (name, id, email, school, role) => {
  const iDetails =
  `
    <div class="card employee-card">
    <div class="employee-header">
        <h5 class="card-title employee-name">${name}</h5>
        <h5 class="card-title job-title"><i class="fas fa-user-graduate my-icons"></i> ${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
               <p class="card-text detail-text employee-email">Email:  <a href="mailto:${email}">${email}</p></a>
                <p class="card-text detail-text employee-github">School: ${school}</p>
            </div>
        </div>
    </div>
  `
  HTML.push(iDetails);
  // console.log(HTML);
};

// Manager Card
const mCard = (name, id, email, officeNumber, role) => {
  const mDetails =
  `
    <div class="card employee-card">
    <div class="employee-header">
        <h5 class="card-title employee-name">${name}</h5>
        <h5 class="card-title job-title"><i class="fas fa-mug-hot my-icons"></i> ${role}</h5>
    </div>
        <div class="card-body employee-card-body">
            <div class="employee-details container">
                <p class="card-text detail-text employee-id">ID: ${id}</p>
                <p class="card-text detail-text employee-email">Email: <a href="mailto:${email}">${email}</a></p>
                <p class="card-text detail-text employee-officeNumber">Office Number: ${officeNumber}</p>
            </div>
        </div>
    </div>
  `
  HTML.push(mDetails);
  // console.log(HTML);
};

// Make engineer card
const makeECard = () => {
  let engineerArr = employeesArr.filter(employee => employee.getRole() === 'Engineer')
  for (let i = 0; i < engineerArr.length; i++) {
    eCard(
      engineerArr[i].getName(),
      engineerArr[i].getId(),
      engineerArr[i].getEmail(),
      engineerArr[i].getGitHub(),
      engineerArr[i].getRole()
    );
    // console.log(engineerArr[i].gitHub)
  }
}

// Make intern card
const makeICard = () => {
  let internArr = employeesArr.filter(employee => employee.getRole() === 'Intern')
  for (let i = 0; i < internArr.length; i++) {
    iCard(
      internArr[i].getName(),
      internArr[i].getId(),
      internArr[i].getEmail(),
      internArr[i].getSchool(),
      internArr[i].getRole()
    );
    // console.log(internArr[i].school)
  }
}

// Make manager card
const makeMCard = () => {
  // console.log(employeesArr)
  let managerArr = employeesArr.filter(employee => employee.getRole() === 'Manager')
  for (let i = 0; i < managerArr.length; i++) {
    mCard(
      managerArr[i].getName(),
      managerArr[i].getId(),
      managerArr[i].getEmail(),
      managerArr[i].getOfficeNumber(),
      managerArr[i].getRole()
    );
    // console.log(managerArr[i].officeNumber)
  }
}

// Generate HTML
const generateHTML = () => {
  HTML.push(`
      </div>    
    </div>
  </body>
  </html>
  `)
  fs.writeFileSync("dist/index.HTML", HTML.join(''))
}