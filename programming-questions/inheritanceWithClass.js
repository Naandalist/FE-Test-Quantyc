// Define Employee class
class Employee {
  // constructor that accepts name and salary as input and assigns them to the instance properties
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  // method that prints a string including the instance name property
  work() {
    console.log(`${this.name} is working`);
  }
  // method that prints a string including the instance name and salary properties
  getSalary() {
    console.log(`${this.name}'s salary is IDR ${this.salary}`);
  }
}

// Define Manager class that inherits from Employee
class Manager extends Employee {
  // constructor that accepts name, salary, and teamSize as input, calls the super constructor to set name and salary properties, and assigns teamSize to the instance property
  constructor(name, salary, teamSize) {
    super(name, salary);
    this.teamSize = teamSize;
  }
  // method that prints a string including the instance name and teamSize properties
  manage() {
    console.log(`${this.name} is managing a team of ${this.teamSize} people`);
  }
}

// Create an instance of the Manager class
const manager = new Manager("Nanda", 20000000, 10);

// calls the work method on the manager instance
manager.work(); // Output: "Nanda is working"

// calls the getSalary method on the manager instance
manager.getSalary(); // Output: "Nanda's salary is IDR 20000000"

// calls the manage method on the manager instance
manager.manage(); // Output: "Nanda is managing a team of 10 people"
