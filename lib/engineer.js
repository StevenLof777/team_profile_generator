class Engineer{
    constructor(name, id, email, gitHub) {
    this.role = 'Engineer';
    this.name = name;
    this.id = id;
    this.email = email
    this.gitHub = gitHub
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
    getGitHub() {
        return this.gitHub
    }
    getRole(){
        return this.role
    }     
}

module.exports = Engineer