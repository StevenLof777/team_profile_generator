class Manager{
    constructor(officeNumber) {
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole(){
        this.role = 'Manager'
        return this.role
    }      
}
module.exports = Manager