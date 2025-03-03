// Q5: Generic Function identity<T>
function identity<T>(value: T): T {
    return value;
}

// Calling the function with different types
console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));
console.log(identity<boolean>(true));

// Q6: Enum Color and getColorName function
enum Color {
    Red,
    Green,
    Blue
}

function getColorName(color: Color): string {
    return Color[color]; // Enum reverse mapping
}

// Calling getColorName
console.log(getColorName(Color.Red));   // "Red"
console.log(getColorName(Color.Green)); // "Green"
console.log(getColorName(Color.Blue));  // "Blue"

// Q7: Union Type Function printDetails
function printDetails(value: string | number): void {
    console.log(`Type: ${typeof value}, Value: ${value}`);
}

// Calling printDetails with different types
printDetails("TypeScript");
printDetails(100);
