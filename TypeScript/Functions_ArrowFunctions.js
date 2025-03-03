// Q8: Normal function
function multiplyNumbers(a, b) {
    return a * b;
}
console.log("Normal Function:", multiplyNumbers(4, 5)); // Output: 20
// Q8: Arrow function
var multiplyNumbersArrow = function (a, b) { return a * b; };
console.log("Arrow Function:", multiplyNumbersArrow(4, 5)); // Output: 20
// Q9: Arrow function to sum an array
var sum = function (numbers) { return numbers.reduce(function (acc, num) { return acc + num; }, 0); };
console.log("Sum of Array:", sum([1, 2, 3, 4, 5])); // Output: 15
