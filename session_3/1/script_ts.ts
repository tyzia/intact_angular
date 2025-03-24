function changeText(): void {
    const message: string = "Hello, you clicked the button!";
    const paragraph = document.getElementById("demo");
    if (paragraph) {
        paragraph.innerHTML = message;
    }
    console.log("Text has been changed (TS).");
}


// Examples with age (TS)

// let age: number; // 3) change to boolean
// function generateAge(): number { // 2) change to 'string'
//  return 18; // 1) change to '18'
// }
// age = generateAge();
// age += 1;
// console.log(age);




// Example if I do need to change contract:

// let age: string;
// function generateAge(): string {
//  return 'hello';
// }
// age = generateAge();
// age += ' world';
// console.log(age);



// Example of parameters

// function isValid(isActive: boolean): void {
//     const isTruthy: boolean = isActive; // change type to 'number'
// }
// isValid(true); // change to 'true'




// Example of arrays with types

// const nums: number[] = [1, 2, 3]; // change to '1'
// const letters: string[] = ['a', 'b', 'c'];
// const booleans: boolean[] = [true, false, false]; // change to 'true'


// Example of interface

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = {
//     name: "John", // change to true
//     age: 30,
// };
// console.log(person);




// Example of 'any' type and run-error

// let data: any = "Hello, World!";
// data = 42; // No error
// console.log(data.toUpperCase()); // Runtime error: toUpperCase is not a function



// Example of 'any' type and unexpected results

// function add(a: any, b: any) {
//     return a + b;
// }
//
// console.log(add(5, 10)); // 15
// console.log(add("5", 10)); // 510








