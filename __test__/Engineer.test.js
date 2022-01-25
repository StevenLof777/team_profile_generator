const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    // Checks github method
    describe("Check github method", () => {
      it("Checks to see if the github is a sting", () => {
        const newEngineer = new Engineer('somename', 123, 'somemail@email', 'some github');
        const newGithub = newEngineer.getGitHub()
        expect(typeof newGithub).toEqual('string');
      });
    });
});