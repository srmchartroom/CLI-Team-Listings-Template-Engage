// TODO: Write code to define and export the Employee class
//? Tests to pass:
//? 1. Can Instantiate a New Employee
// const e = new Employee();
// expect(typeof(e)).toBe("object");
//? 2. Can set name via constructor arguments
// const name = "Alice";
// const e = new Employee(name);
// expect(e.name).toBe(name);
//? 3. Can set id via constructor argument
// const testValue = 100;
// const e = new Employee("Foo", testValue);
// expect(e.id).toBe(testValue);
//? 4. Can set email via constructor argument
// const testValue = "test@test.com";
// const e = new Employee("Foo", 1, testValue);
// expect(e.email).toBe(testValue);
//? 5. Can get name via getName()
// const testValue = "Alice";
// const e = new Employee(testValue);
// expect(e.getName()).toBe(testValue);
//? 6. Can get id via getId()
// const testValue = 100;
// const e = new Employee("Foo", testValue);
// expect(e.getId()).toBe(testValue);
//? 7. Can get email via getEmail()
// const testValue = "test@test.com";
// const e = new Employee("Foo", 1, testValue);
// expect(e.getEmail()).toBe(testValue);
//? 8. getRole() should return \"Employee\"
// const testValue = "Employee";
// const e = new Employee("Alice", 1, "test@test.com");
// expect(e.getRole()).toBe(testValue);

class Employee {
  constructor(name, id, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  getId() {
    return this.id;
  }
}

module.exports = Employee;
