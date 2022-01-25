// class Intern{
//     constructor(school, id, email, name) {
//         this.school = school
//         this.name = name;
//         this.id = id;
//         this.email = email;
//     }
//     getRole(){
//     return 'Intern';
//     }
//     getId(){
//     return this.id
//     }
//     getName(){
//     return this.name
//     }
//     getEmail(){
//     return this.email
//     }
//     getSchool() {
//     return this.school
//     }      
// }
// module.exports = Intern

const Employee = require('./employee')

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getRole(){
    return 'Intern';
    }
    getSchool() {
    return this.school
    }      
}

module.exports = Intern