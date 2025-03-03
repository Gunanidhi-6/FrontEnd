// Q16: Function to parse JSON safely
function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}

// Q17: Function to handle division with error checking
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}

// Example Usage:
console.log(parseJson('{"name": "Ben", "age": 25}')); // Valid JSON
console.log(parseJson('Invalid JSON')); // Invalid JSON, logs error and returns null

try {
    console.log(divideNumbers(10, 2)); // Output: 5
    console.log(divideNumbers(5, 0));  // Throws an error
} catch (error) {
    console.error(error.message);
}
