const Manager = require('../lib/manager')

describe("Manager", () => {
  describe("Check School method", () => {
    it("Checks to see if the School is a sting", () => {
      const newManager = new Manager('somename', 123, 'somemail@email', 1234234534);
      const officeNumber = newManager.getOfficeNumber()
      expect(typeof officeNumber).toEqual('number');
    });
  });
});