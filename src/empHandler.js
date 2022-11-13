// Dependancies
const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');

//Hoisted vars
let managerArr = [];
let engineerArr = [];
let internArr = [];

//Inquirer prompts

//what employee are you adding?
const contQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userSelect',
            message: 'Please make a selection',
            choices: [
                'Create new Manager',
                'Create new Engineer',
                'Create new Intern',
                'Exit application'
            ],
        },
    ])
};

//create manager
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office phone number',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
}
//add generic employee info
const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email',
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID',
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
};

// add engineer info
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'git',
            message: 'Please enter GitHub username',
        },
    ])
};

//add intern info 
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school',
        },
    ])
};

// //init and add manager

async function empAdd() {
    let continueRes = await contQuestion();
    if (continueRes.userSelect == 'Create new Engineer') {
        let employeeRes = await employeePrompt();
        let engineerRes = await engineerPrompt();
        let engineer = new Engineer(employeeRes.name, employeeRes.id, employeeRes.email, 'Engineer', engineerRes.git)
        engineerArr.push(engineer);
    } else if (continueRes.userSelect == 'Create new Intern') {
        let employeeRes = await employeePrompt();
        let internRes = await internPrompt();
        let intern = new Intern(employeeRes.name, employeeRes.id, employeeRes.email, 'Intern', internRes.school)
        internArr.push(intern);
    } else if (continueRes.userSelect == 'Create new Manager') {
        let employeeRes = await employeePrompt();
        let managerRes = await managerPrompt();
        let manager = new Manager(employeeRes.name, employeeRes.id, employeeRes.email, 'Manager', managerRes.officeNum)
        managerArr.push(manager);
    } else {
        return;
    }
    await empAdd();
}

module.exports = {
    empAdd,
    Employee,
    Manager,
    Engineer,
    Intern,
    managerArr,
    engineerArr,
    internArr,
}