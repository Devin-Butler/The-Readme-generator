// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const generateMarkdown = require('../Develop/utils/generateMarkdown')
inquirer
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Projectname',
        message: 'What is your project name?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'write a description for your project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Write an installation guide',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your app used?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who contributed?',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Write your license',
      },
    ]);
  };

 


  const init = () => {
    questions()

      .then((answers) => writeFile('README.md', generateMarkdown(answers)))
      .then(() => console.log('Success'))
      .catch((err) => console.error(err));
  };
  
  init();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
