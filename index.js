const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const setup = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'setupRes',
            message: 'This is the first time you have run the app. You must first include "Manager" details. Do you wish to continue?',
            choices: [
                'Yes',
                'No'
            ],
        },
    ])
};

const contQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'userSelect',
            message: 'Please make a selection',
            choices: [
                'Create new Engineer',
                'Create new Intern',
                'Exit application'
            ],
        },
    ])
};

const managerPromt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'nameMan',
            message: 'Please enter your name',
        },
        {
            type: 'input',
            name: 'idMan',
            message: 'Please enter your employee ID',
        },
        {
            type: 'input',
            name: 'emailMan',
            message: 'Please enter your email address',
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office phone number',
        },
    ])
}

const employeePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter name',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID',
        },
    ])
};

const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'git',
            message: 'Please enter GitHub username',
        },
    ])
};

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school',
        },
    ])
};

async function empHandler() {
    let initSetup = await setup();
    if (initSetup.setupRes === 'Yes') {
        let managerRes = await managerPromt();
        let manager = new Manager(managerRes.nameMan, managerRes.idMan, managerRes.emailMan, 'Manager', managerRes.officeNum);
        console.log(manager);
        empAdd();
    } else {
        return;
    };
}

async function empAdd() {
    let continueRes = await contQuestion();
    if (continueRes.userSelect == 'Create new Engineer') {
        console.log('test')
        let employeeRes = await employeePrompt();
        let engineerRes = await engineerPrompt();
        let engineer = new Engineer(employeeRes.name, employeeRes.id, employeeRes.email, 'Engineer', engineerRes.git)
        console.log(engineer);
    } else if (continueRes.userSelect == 'Create new Intern') {
        let employeeRes = await employeePrompt();
        let internRes = await internPrompt();
        let intern = new Intern(employeeRes.name, employeeRes.id, employeeRes.email, 'Intern', internRes.school)
        console.log(intern);
    } else {
        return;
    }
    empAdd();

}

empHandler()