const fs = require('fs');
const { empAdd, managerArr, engineerArr, internArr } = require('./src/empHandler');
const { generateHTML } = require('./src/htmlHelper');

const writeTofile = (data) => {
    fs.writeFile('./dist/index.html', data,
    (err) => err ? console.error(err) : console.log('index.html has been generated'))
} 

async function init() {
    await empAdd();
    writeTofile(generateHTML(managerArr, engineerArr, internArr))
};

init();