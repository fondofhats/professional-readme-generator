const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "accountName",
      message: "What is your github username? (Required)",
      validate: (accountNameInput) => {
        if(accountNameInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "accountEmail",
      message: "What is your github email address? (Required)",
      validate: (accountEmailInput) => {
        if(accountEmailInput) {
          return true;
        } else {
          console.log("Please enter your GitHub email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of the project repository? (Required)",
      validate: (projectTitleInput) => {
        if(projectTitleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "badges",
      message: "What badges would you like to display? (Check all that apply)",
      choices: [
        "Language Count",
        "Top Language",
        "Code Size",
        "Repo Size",
        "Issues",
        "Issues Closed",
        "Release Version by Date",
      ],
      default:['Issues'],
    },
    {
      type: "input",
      name: "description",
      message: "Desribe your project. (Required)",
      validate: (descInput) => {
        if(descInput) {
          return true;
        } else {
          console.log("Please enter your project description!");
          return false;
        }
      },      
    },
    {
      type: "confirm",
      name: "confirmInstall",
      message:
        "Would you like to enter some information about how install your project?",
      default: false,
    },
    {
      type: "input",
      name: "install",
      message: "How can someone install this project?:",
      when: ({ confirmInstall }) => {
        if (confirmInstall) {
          return true;
        } else {
          return false;
        }
      },
    },    
    {
      type: "confirm",
      name: "confirmUse",
      message:
        "Would you like to enter some information about how to use your project?",
      default: false,
    },
    {
      type: "input",
      name: "use",
      message: "How can someone use this project?:",
      when: ({ confirmUse }) => {
        if (confirmUse) {
          return true;
        } else {
          return false;
        }
      },
    },       
    {
      type: "confirm",
      name: "displayLicense",
      message: "Would you like to display the license used for this project?:",
      default: true,
    },
    {
      type: "confirm",
      name: "confirmTest",
      message:
        "Would you like to enter information on how is this project tested??",
      default: false,
    },
    {
      type: "input",
      name: "test",
      message: "How is this project tested?:",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message:
        "Would you like to enter some information about how can someone contribute to this project?",
      default: false,
    },
    {
      type: "input",
      name: "contribute",
      message: "How can someone contribute to this project?:",
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "image",
      message: "Would you like to display your user image?",
      default: false,
    },
  ]);
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  promptUser().then((answers) => console.log(answers));
}

// function call to initialize program
init();
