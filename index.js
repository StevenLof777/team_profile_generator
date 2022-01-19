const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    }
  ]);
};

const generateHTML = ({ employee, engineer, intern, manager }) =>
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
             


          </div>
      </div>
  </body>
  </html>`;

// Using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();
