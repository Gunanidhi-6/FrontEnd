// Q5: Generic Function identity<T>
function identity(value) {
    return value;
}
// Calling the function with different types
console.log(identity("Hello, TypeScript!"));
console.log(identity(42));
console.log(identity(true));
// Q6: Enum Color and getColorName function
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    return Color[color]; // Enum reverse mapping
}
// Calling getColorName
console.log(getColorName(Color.Red)); // "Red"
console.log(getColorName(Color.Green)); // "Green"
console.log(getColorName(Color.Blue)); // "Blue"
// Q7: Union Type Function printDetails
function printDetails(value) {
    console.log("Type: ".concat(typeof value, ", Value: ").concat(value));
}
// Calling printDetails with different types
printDetails("TypeScript");
printDetails(100);
