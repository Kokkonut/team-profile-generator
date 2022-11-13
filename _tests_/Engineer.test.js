
// using Engineer constructor 
const Engineer = require('../lib/Engineer');


// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Nic', 9, 'nic@nic.com', 'Engineer', 'Kokkonut');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Nic', 9, 'nic@nic.com', 'Engineer',  'nicolewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});