function LogInstantiation<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args);
            console.log(`Instance of ${constructor.name} created with arguments:`, args);
        }
    };
}

@LogInstantiation
class User {
    constructor(public name: string, public age: number) {}
}

const user1 = new User("Alice", 30); // Logs: Instance of User created with arguments: ["Alice", 30]




function ValidateEmail(value: undefined, context: ClassFieldDecoratorContext) {
    return function (initialValue: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(initialValue)) {
            throw new Error(`Invalid email: ${initialValue}`);
        }
        return initialValue;
    };
}

class UserWithEmail {
    @ValidateEmail
    email: string;

    constructor(email: string) {
        this.email = email; // If invalid, an error will be thrown
    }
}

try {
    const user = new UserWithEmail("invalid-email"); // ❌ Throws Error: Invalid email
} catch (error) {
    console.error(error);
}

const user2 = new UserWithEmail("valid@example.com"); // ✅ Works fine
console.log(user2.email); // Outputs: valid@example.com

