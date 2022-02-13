const inquirer = require('inquirer');
const fs = require('fs');
const generatehtml = require('./src/generateHtml');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

let team = [];

function writeToFile() {
    console.log(team);
    
    let fileName = "team.html";
    fs.writeFile(`./dist/${fileName}`, generatehtml(team), (err) =>
        err ? console.log(err) : console.log("Data written to HTML."));
}

function launchApp() {
    console.log("Welcome to the Team Profile Generator!");

    // Prompt to enter the team manager’s information.
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Enter the team manager's name: "
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Enter the team manager's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Enter a number.';
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Enter the team manager's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter the team manager's office number: "
            }
        ])
        .then((res) => {
            team.push(new manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber));
            showMenu();
        });
}

// A menu to add an engineer or an intern or to finish team building.
function showMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: "Choose one of the following options: ",
                choices: ["Add an engineer", "Add an intern", "Finish"]
            }
        ])
        .then((response) => {
            if (response.menu === "Finish") {
                // Exits and generates html
                console.log("Thank you for using this application!");
                writeToFile();
            } else if (response.menu === "Add an engineer") {
                addengineer();
            } else {
                addintern();
            }
        });
}

// Prompt to enter the engineer’s information
function addengineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Enter the engineer's name: "
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Enter the engineer's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Enter a number.';
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Enter the engineer's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Enter the engineer's GitHub username: "
            }
        ])
        .then((res) => {
            team.push(new engineer(res.engineerName, res.engineerId, res.engineerEmail, res.github));
            // back menu
            showMenu();
        });
}

// Prompt to enter the intern’s information
function addintern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Enter the intern's name: "
            },
            {
                type: 'input',
                name: 'internId',
                message: "Enter the intern's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Enter a number.';
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Enter the intern's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Enter the intern's school: "
            }
        ])
        .then((res) => {
            team.push(new intern(res.internName, res.internId, res.internEmail, res.school));
            // back to menu
            showMenu();
        });
}

// Launch the application
launchApp();