const Employee = require('./employee');
const Intern = require('./intern')

describe("Intern", () => {
    // getSchool method should check to see if the input is a string.
    // Use typeOf when making getSchool method.
    describe("Initialization", () => {
      it("Should create an object with GitHub and the employee's GitHub if provided valid arguments", () => {
        const result = new Intern().getSchool('School', 'string');
        expect(result).toEqual('string');
        });

      it("Should throw an error if the user does not enter anything.", () => {
        const cb = () => new Intern().getSchool('school');
        const err = new Error('Expected parameter "someSchool" to be completed.')
        expect(cb).toThrow(err);
        });

      it("Should throw an error if the getRole method doesn't return 'Intern'.", () => {
        const cb = () => new Intern().getRole('role', 'Intern');
        const err = new Error("Expected to return 'Intern'.");
        expect(cb).toThrowError(err);
        });  
    });
});