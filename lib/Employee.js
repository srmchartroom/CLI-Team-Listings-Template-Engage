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
