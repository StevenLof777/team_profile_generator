class Engineer{
    constructor(name, id, email, gitHub) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
    }
    getName(){
        return this.name
    }
    getGitHub() {
        return this.gitHub
    }     
}
module.exports = Engineer