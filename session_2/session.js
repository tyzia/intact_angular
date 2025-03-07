











// Plan

// Typescript















// What is TypeScript?

// TypeScript is a superset of JavaScript.
// It compiles down to JavaScript,
// so it runs anywhere JavaScript runs.






// Why TypeScript?

// TypeScript helps catch errors during development
// rather than runtime, making the code more robust
// and easier to maintain.











// Let's check if you have TypeScript installed:


// tsc -v

// -bash: tsc: command not found
// That means TypeScript is not installed.












// npm




// If you want to use TS, you need npm,
// so let's first quickly learn what it is.






// npm (Node Package Manager) is a package manager for JavaScript








// let's initialise npm project

// > mkdir test
// > cd test
// > npm init -y
// > ls


// This will initiate npm project and create 2 files:

// - package.json
// - package-lock.json


// package.json - heart of an npm project.

// It contains metadata about the project:
//  - Project name, version, description, and author.
//  - Dependencies: External libraries your project needs to run.
//  - DevDependencies: Packages required only during development.
//  - Scripts: Custom commands you can run.






// Example of package.json

// {
//     "name": "my-ts-project",
//     "version": "1.0.0",
//     "description": "A TypeScript project",
//     "main": "index.js",
//     "scripts": {
//     "build": "tsc",
//         "start": "node dist/index.js"
// },
//     "devDependencies": {
//     "typescript": "^4.5.4"
// },
//     "dependencies": {}
// }








// Now let's install TS as dev dependency in this project

// > npm i typescript --save-dev

// It should be a dev dependency, because it is necessary
// only in development stage.










// Now let's see if TS was installed

// > tsc -v

// -bash: tsc: command not found

// what?

// That means TypeScript is still not installed.
// Because 'tsc' command tries to use global TS installation.










// If I want to use TS in local project I need npx:

// npx tsc -v












// What is npx?

// npx is part of npm and allows to run binaries from node_modules
// without needing them to be installed globally.

// node_modules - is a folder where all dependencies of my
// project are installed.


// > ls node_modules











// Installing is not enough, we need to add
// TS settings








// > npx tsc --init

// This will create tsconfig.json with all settings















// Ok, let's create TS file

// > vim script.ts













/*
TypeScript compiles .ts files into .js files.
    Converting JS to TS

Rename .js file to .ts and start adding types to variables and functions.
    Core TypeScript Concepts (45 minutes)
1. Types and Type Annotations (10 minutes)
Primitive Types (String, Number, Boolean, Null, Undefined, Symbol, BigInt)

Example: let name: string = "Alice";
Compare to JavaScript, where variables don’t have a type until runtime.
    Arrays and Tuples

Arrays with explicit types: let nums: number[] = [1, 2, 3];
Tuples: Fixed-length arrays with specific types for each element:
    let person: [string, number] = ["Alice", 30];
Enums

Example: enum Color { Red, Green, Blue };
Can make the code more readable by using symbolic names.
    Any Type

any allows a variable to hold any type: let value: any = "Hello";
Warn students that overusing any reduces the benefits of TypeScript.
2. Interfaces and Types (10 minutes)
Interfaces

Define a shape for objects:
typescript
Copy
interface Person {
  name: string;
  age: number;
}
let person: Person = { name: "Alice", age: 30 };
Type Aliases

Alternative to interfaces, can be used to define more complex types:
    typescript
Copy
type Coordinates = { x: number, y: number };
let point: Coordinates = { x: 10, y: 20 };
Function Signatures

Type-checking for function parameters and return values:
typescript
Copy
function greet(name: string): string {
  return `Hello, ${name}`;
}
3. Union Types (5 minutes)
Union Types allow variables to accept multiple types:

    typescript
Copy
let value: string | number = "Hello";
value = 10; // Valid
Example: Function that accepts multiple types:

    typescript
Copy
function display(value: string | number) {
  console.log(value);
}
4. Type Inference (5 minutes)
Type Inference allows TypeScript to automatically infer the type based on the value assigned:

    typescript
Copy
let x = 5; // TypeScript infers x as a number
Demonstrate how TypeScript infers types and when it might need explicit annotations.

5. Generics (5 minutes)
What are Generics?
    Generics allow you to create reusable components that work with any data type.
    Example: Generic function
typescript
Copy
function identity<T>(arg: T): T {
  return arg;
}
let result = identity(5); // result is of type number

 */
