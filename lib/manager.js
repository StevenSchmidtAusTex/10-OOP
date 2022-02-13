const employee = require('./Employee');

class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //getter for manager's office number.
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = manager;