const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./Develop/utils/generateMarkdown.js');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const promptQuestions = () => {
  return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is the project name? (required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation requirements?'
  },
  { 
    type: 'input',
    name: 'usage',
    message: 'What is the project usage?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who do you want to credit for the project?'
  },
  {
    type: 'input',
    name: 'tests',
    message:'Does the project include any tests?'

  },
  {
    type: 'list',
    name: 'license',
    message: "What license covers the app?",
    choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0','No License']


  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github profile name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }



  ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptQuestions()
  .then(projectData => {
    const pagemd = generatePage(projectData)
    fs.writeFile('./readme.md',pagemd, err=> {
      if (err) throw new Error(err);
      console.log('Page created! Check out readme.md in this directory to see it.')
    })
  })
}

// Function call to initialize app
init();
