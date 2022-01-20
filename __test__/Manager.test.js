const Employee = require('./employee');
const Manager = require('./manager')

describe("Manager", () => {
    // getGitHub method should check to see if the input is a string.
    // Use typeOf when making getGitHub method.
    describe("Initialization", () => {
      it("Should create an object with GitHub and the employee's GitHub if provided valid arguments", () => {
        const someGitHub = 'some GitHub';
        const result = new Manager().getGitHub('GitHub', someGitHub);
        expect(result).toEqual('string');
        });

      it("Should throw an error if the user does not enter anything.", () => {
        const cb = () => new Manager().getGitHub('GitHub');
        const err = new Error('Expected parameter "someGitHub" to be completed.')
        expect(cb).toThrow(err);
        });

      it("Should throw an error if the getRole method doesn't return 'Manager'.", () => {
        const cb = () => new Manager().getRole('role', 'Manager');
        const err = new Error("Expected to return 'Manager'.");
        expect(cb).toThrowError(err);
        });  
    });
});