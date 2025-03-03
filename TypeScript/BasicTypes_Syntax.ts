// Q1: Define variables of different types and print them
let num: number = 42;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let anyVar: any = "I can be anything!";

console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);
console.log("Null:", nullVar);
console.log("Undefined:", undefinedVar);
console.log("Any:", anyVar);

// Q2: Function to format user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}

// Example usage
let age: number = 25;
let isActive: boolean = true;
console.log(getUserInfo(age, isActive));
