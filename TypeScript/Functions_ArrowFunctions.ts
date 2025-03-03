// Q8: Normal function
function multiplyNumbers(a, b) {
    return a * b;
}
console.log("Normal Function:", multiplyNumbers(4, 5)); // Output: 20

// Q8: Arrow function
const multiplyNumbersArrow = (a, b) => a * b;
console.log("Arrow Function:", multiplyNumbersArrow(4, 5)); // Output: 20

// Q9: Arrow function to sum an array
const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array:", sum([1, 2, 3, 4, 5])); // Output: 15
