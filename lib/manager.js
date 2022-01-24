class Manager{
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber
    }
    getRole(){
    return 'Manager';
    }
    getId(){
    return this.id
    }
    getName(){
    return this.name
    }
    getEmail(){
    return this.email
    }
    getOfficeNumber() {
    return this.officeNumber
    }    
}
module.exports = Manager