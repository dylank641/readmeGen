// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown');
const fs = require('fs');

//project title
//description
//installation instructions
//usage information
//contribution guidelines
//test instructions
//licence(options)
//github username

//Questions
//email addrress goes under questions



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: title => {
        if (title) {
          return true;
        } else {
          console.log('Please enter the title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project. (Required)',
      validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Please provide a description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installInstruc',
      message: 'Please provide the installation instructions (Required)',
      validate: installInstruc => {
        if (installInstruc) {
          return true;
        } else {
          console.log('Please provide the installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'Please provide the usage information. (Required)',
      validate: usageInfo => {
        if (usageInfo) {
          return true;
        } else {
          console.log('Please provide the usage information!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'conGuide',
      message: 'Please provide the contribution guidelines. (Required)',
      validate: conGuide => {
        if (conGuide) {
          return true;
        } else {
          console.log('Please provide the contribution guidelines!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'testInstruc',
      message: 'Please provide the test instructions. (Required)',
      validate: testInstruc => {
        if (testInstruc) {
          return true;
        } else {
          console.log('Please provide the test intructions!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please provide the test instructions. (Required)',
      choices: ['Apache 2.0 License', 'The MIT License', 'IBM Public License Version 1.0', 'Eclipse Public License 1.0', 'Boost Software License 1.0', 'None'],
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Please enter your GitHub username. (Required)',
      validate: gitHub => {
        if (gitHub) {
          return true;
        } else {
          console.log('Please provide your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email addrress. (Required)',
      validate: testInstruc => {
        if (testInstruc) {
          return true;
        } else {
          console.log('Please provide your email addrress!');
          return false;
        }
      }
    },
  
];


// TODO: Create a function to write README file
function writeToFile(data) {
  //send data to generate markdonw
  //use fs to write it to file
  return new Promise((resolve, reject) => {
    fs.writeFile('README.md', genMark(data), err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
.then(function(answers){
  return writeToFile(answers)
})
.catch(err => {
  console.log(err);
});

}

// Function call to initialize app
init();
