const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');
const fs = require('fs');

let employeesArr = [];

// Break up prompts into separate functions
const findRole = () => {
  inquirer.prompt([
    {
    type: 'list',
    choices: ['Engineer', 'Manager', 'Intern'], 
    name: 'role',
    message: 'Which role does this employee have?'
    }
  ]).then((answers) => {
    // removed .role
    switch(answers.role) {
      case 'Engineer':
        engineer();
        break;
      case 'Intern':
        intern();
      default:
        manager();
    }
  })
}

findRole()

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
    name: "github",
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
    console.log(engineer)  
    switch(answers.moreRoles) {
      case 'Yes':
        findRole()
        break;
      case 'No':
      default:
        init();
        // console.log('Generate HTML')
    }
  })
}

// const intern = () => {
//   inquirer.prompt([
//     {
//     type: "input",
//     name: "school",
//     message: "What is school is the intern attending?"
//     },
//     {
//     type: "list",
//     choices: ['Yes', 'No'],
//     name: "moreRoles",
//     message: "Are there anymore roles you would like to add?"
//     }
//     ]).then((answers) => {
//     switch(answers.moreRoles) {
//       case 'Yes':
//         findRole()
//         break;
//       case 'No':
//       default:
//         // generateHTML();
//         console.log('Generate HTML')
//     }
//   })
// }

// const manager = () => {
//   inquirer.prompt([
//     {
//     type: "input",
//     name: "officeNumber",
//     message: "What is the manager's office number?"
//     },
//     {
//     type: "list",
//     choices: ['Yes', 'No'],
//     name: "moreRoles",
//     message: "Are there anymore roles you would like to add?"
//     }  
//   ]).then((answers) => {
//     switch(answers.moreRoles) {
//       case 'Yes':
//         findRole()
//         break;
//       case 'No':
//       default:
//         // generateHTML();
//         console.log('Generate HTML')
//     }
//   })
// };

// Make a array of employees
// Loop through the array and for each employee make an card

// Make a function called generateTeam
// Use .join 

// This should be the return

const generateHTML = () => {

  const engineerCard = () => {
    const eCard =
    // `
    //   <div class="card employee-card">
    //   <div class="employee-header">
    //       <h5 class="card-title employee-name">${engineer.getName()}</h5>
    //       <h5 class="card-title job-title"><i class="fas fa-mug-hot my-icons"></i>${engineer.getRole()}</h5>
    //   </div>
    //       <div class="card-body employee-card-body">
    //           <div class="employee-details container">
    //               <p class="card-text detail-text employee-id">ID: ${engineer.getId()}</p>
    //               <p class="card-text detail-text employee-email">Email: ${engineer.getEmail()}</p>
    //               <p class="card-text detail-text employee-github">GitHub: ${engineer.getGitHub()}</p>
    //               <p class="card-text detail-text employee-office-num">Office Number: ${engineer.getId()}</p>
    //           </div>
    //       </div>
    // </div>
    //   `
    `
      <div class="card employee-card">
      <div class="employee-header">
          <h5 class="card-title employee-name">Bob</h5>
          <h5 class="card-title job-title"><i class="fas fa-mug-hot my-icons"></i>$</h5>
      </div>
          <div class="card-body employee-card-body">
              <div class="employee-details container">
                  <p class="card-text detail-text employee-id">ID: </p>
                  <p class="card-text detail-text employee-email">Email: </p>
                  <p class="card-text detail-text employee-github">GitHub: </p>
                  <p class="card-text detail-text employee-office-num">Office Number: </p>
              </div>
          </div>
    </div>
      `
      return eCard
}

  const markup = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="src/styles-reset-demo.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/ddeafb3003.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="src/styles-demo.css">
      <title>Demo</title>
  </head>
  <body>
      <header class="my-header">
          <h1 class="title">My Team</h1>    
      </header>
  
      <div class="container card-container">
          <div class="row card-row justify-content-md-center">
            ${engineerCard()}
          </div>
      </div>
  </body>
  </html>`;
  
  return markup
};

const init = () => {
  console.log('init works')
  fs.writeFileSync('index.html', generateHTML());
};
