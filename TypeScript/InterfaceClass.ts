// Q3: Define an interface Person
interface Person {
    name: string;
    age: number;
}

// Create a class Employee that implements Person
class Employee implements Person {
    name: string;
    age: number;
    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }

    getEmployeeDetails(): string {
        return `Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`;
    }
}

// Q4: Define an interface Vehicle
interface Vehicle {
    startEngine(): string;
}

// Create a class Car that implements Vehicle
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(): string {
        return `The engine of the ${this.year} ${this.make} ${this.model} has started.`;
    }
}

// Example usage:
const emp = new Employee("Ravi", 30, 101);
console.log(emp.getEmployeeDetails());

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
