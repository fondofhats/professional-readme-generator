const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your github username?",
      name: "accountName",
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
    },
    {
      type: "input",
      message: "What is your github email address?",
      name: "accountEmail",
    },
    {
      type: "input",
      message: "What is the name of the project repository?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Desribe your project.",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install this project?",
      name: "install",
    },
    {
      type: "input",
      message: "How do you use this project?",
      name: "use",
    },
    {
      type: "input",
      message: "What license is used for this project?:",
      name: "license",
    },
    {
      type: "confirm",
      name: "confirmTest",
      message:
        "Would you like to enter information on how is this project tested??",
      default: true,
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
      default: true,
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
