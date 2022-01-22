class Engineer{
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
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
    getGitHub() {
        return this.gitHub
    }     
}
module.exports = Engineer