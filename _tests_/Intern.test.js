// using Intern constructor 
const Intern = require('../lib/Intern');

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Nic', 9, 'nic@nic.com', 'Intern', 'KHS');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Nic', 9, 'nic@nic.com', 'KHS');

    expect(intern.getRole()).toEqual("Intern");
}); 