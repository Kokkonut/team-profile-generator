// using Manager constructor 
const Manager = require('../lib/Manager');


// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Nic', 9, 'nic@nic.com');

    expect(manager.getRole()).toEqual("Manager");
}); 