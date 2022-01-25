const Employee = require('../lib/employee')

describe('Employee', () => {
  // Checks id method
  describe('Employee Details', () => {
    it('Checks id method to see if it is a number', () => {
      const newEmployee = new Employee('somename', 123, 'somemail@email');
      const id = newEmployee.getId();
      expect(typeof id).toEqual('number');
    }) 
  })
  // Checks name method
  describe('Employee Details', () => {
    it('Checks name method to see if it is a string', () => {
      const newEmployee = new Employee('somename', 123, 'somemail@email');
      const name = newEmployee.getName();
      expect(typeof name).toEqual('string');
    }) 
  })
  // Checks email method
  describe('Employee Details', () => {
    it('Checks email method by looking for a @ symbol', () => {
      const newEmployee = new Employee('somename', 123, 'somemail@email');
      const email = newEmployee.getEmail();
      expect(email.includes('@')).toEqual(true);
    }) 
  })  
})