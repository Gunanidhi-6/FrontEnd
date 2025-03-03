// Create a class Employee that implements Person
var Employee = /** @class */ (function () {
    function Employee(name, age, employeeId) {
        this.name = name;
        this.age = age;
        this.employeeId = employeeId;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "Employee ID: ".concat(this.employeeId, ", Name: ").concat(this.name, ", Age: ").concat(this.age);
    };
    return Employee;
}());
// Create a class Car that implements Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.startEngine = function () {
        return "The engine of the ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " has started.");
    };
    return Car;
}());
// Example usage:
var emp = new Employee("Ravi", 30, 101);
console.log(emp.getEmployeeDetails());
var myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.startEngine());
