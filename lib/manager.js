const Employee = require("./employee");
// Need these properties and methods
// name

// officeNumber

// getRole()—overridden to return 'Manager'

class Manger extends Employee{
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        }
    }
    module.exports = Employee;
    