const Intern = require('../lib/intern');

describe("Intern", () => {
  describe("Check School method", () => {
    it("Checks to see if the School is a sting", () => {
      const newIntern = new Intern('somename', 123, 'somemail@email', 'some School');
      const newSchool = newIntern.getSchool()
      expect(typeof newSchool).toEqual('string');
    });
  });
});