const Employee = require('./employee');
const Engineer = require('./engineer');


describe("Engineer", () => {
    // getGitHub method should check to see if the input is a string.
    // Use typeOf when making getGitHub method.
    describe("Initialization", () => {
      it("Should create an object with GitHub and the employee's GitHub if provided valid arguments", () => {
        const someGitHub = 'some GitHub';
        const result = new Engineer().getGitHub('GitHub', someGitHub);
        expect(result).toEqual('string');
        });

      it("Should throw an error if the user does not enter anything.", () => {
        const cb = () => new Engineer().getGitHub('GitHub');
        const err = new Error('Expected parameter "someGitHub" to be completed.')
        expect(cb).toThrow(err);
        });

      it("Should throw an error if the user inputs a number.", () => {
        const cb = () => new Engineer().getGitHub('GitHub', 'number');
        const err = new Error("Expected parameter 'someGitHub' to be a string.");
        expect(cb).toThrowError(err);
        });  
        
      it("Should throw an error if getGitHub method does not overwrite 'Employee' with 'Engineer'.", () => {
        const engineer = 'Engineer';
        const cb = () => new Engineer().getRole('role', 'number');
        const err = new Error("Expected to return 'Engineer'.");
        expect(cb).toThrowError(err);
        }); 
    });
});