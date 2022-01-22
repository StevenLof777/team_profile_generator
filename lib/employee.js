class Employee {
  constructor(role, name, id, email) {
    this.role = role;
    this.name = name;
    this.id = id;
    this.email = email
  }
  getRole(){
    return this.role
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
}
module.exports = Employee