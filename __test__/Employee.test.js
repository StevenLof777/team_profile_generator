const Employee = require('./employee');

describe("Employee", () => {
    // getName method should check to see if the input is a string.
    // Use typeOf when making getName method.
    describe("getName", () => {
      it("Should return a string", () => {
        const name = 'some name';
        const result = new Employee().getName(name);
        expect(result).toEqual('string');
      });
    });
    // getId method should check to see if the input is a number.
    // Use typeOf when making getId method.
    describe("getId", () => {
        it("Should return a number", () => {
       
        const number = 2;
        const result = new Employee().getId(number);
        expect(result).toEqual('number');
        });
      });

    describe("getEmail", () => {
        it("Should have an @ inside the string.", () => {
        // getId method should check to see if the input is a number.
        // Use string.indexOf('@') when making getEmail method.
        const atChar = '@';
        const result = new Employee().getEmail(email);
        expect(result).toEqual(atChar);
        });
      });
});