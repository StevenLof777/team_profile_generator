const Employee = require('./employee');

describe("Employee", () => {
    // getName method should check to see if the input is a string.
    // Use typeOf when making getName method.
    describe("Initialization", () => {
      it("Should create an object with name and the employee's name if provided valid arguments", () => {
        const someName = 'some name';
        const result = new Employee().getName('name', someName);
        expect(result).toEqual('string');
        });

      it("Should throw an error if the user does not enter anything.", () => {
        const cb = () => new Employee().getName('name');
        const err = new Error('Expected parameter "someName" to be completed.')
        expect(cb).toThrow(err);
        });

      it("Should throw an error if the user inputs a number.", () => {
        const cb = () => new Employee().getName('name', 'number');
        const err = new Error("Expected parameter 'someName' to be a string.");
        expect(cb).toThrowError(err);
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

        it("Should throw an error if the user does not enter anything.", () => {
            const cb = () => new Employee().getId('Id');
            const err = new Error('Expected parameter "number" to be completed.')
            expect(cb).toThrow(err);
            });
    
          it("Should throw an error if the user inputs a string.", () => {
            const cb = () => new Employee().getId('Id', 'number');
            const err = new Error("Expected parameter 'number' to be a number.");
            expect(cb).toThrowError(err);
            }); 
      });
    // getEmail method should check to see if the input is a number.
    // Use string.indexOf('@') when making getEmail method.
    describe("getEmail", () => {
        it("Should have an @ inside the string.", () => {
            const atChar = '@';
            const result = new Employee().getEmail('email', atChar);
            expect(result).toEqual(atChar);
            });

        it("Should throw an error if the user does not enter anything.", () => {
            const cb = () => new Employee().getEmail('email');
            const err = new Error('Expected parameter "validEmail" to be completed.')
            expect(cb).toThrow(err);
            });
    
        it("Should throw an error if the user inputs a number.", () => {
            const cb = () => new Employee().getEmail('email', 'number');
            const err = new Error("Expected parameter 'validEmail' not be a number.");
            expect(cb).toThrowError(err);
            }); 
      });

    // getRole method should check to see if the input is a number.
    // Use a conditional when making getRole method.
    describe("getRole", () => {
        it("Should return 'Employee'.", () => {
            const role = 'Employee';
            const result = new Employee().getRole('role', role);
            expect(result).toEqual(role);
            });

        it("Should throw an error if the getRole method doesn't return 'Employee'.", () => {
            const cb = () => new Employee().getRole('role');
            const err = new Error('Expected to return "Employee".')
            expect(cb).toThrow(err);
            });
        });
});

