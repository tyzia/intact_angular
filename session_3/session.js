











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














// Before continue with TypeScript
// let's create a test project with
// vanilla JS










// In my test project I will create two files:

// -- index.html
// -- script.js










// index.html

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Basic JavaScript Demo</title>
// </head>
// <body>
// <h1>Basic JavaScript Demo</h1>
// <p id="demo">This will be updated with JavaScript.</p>
//
// <button onclick="changeText()">Click me to change the text</button>
//
// <script src="script.js"></script>
// </body>
// </html>







// script.js

// function changeText() {
//     const message = "Hello, you clicked the button!";
//     const paragraph = document.getElementById("demo");
//     paragraph.innerHTML = message;
//     console.log("Text has been changed.");
// }




// This code:
// - get's element on the page with #demo
// - changes it's text
// - logs in the console a message
// - JS code is executed on button click






// demo














// Now let's add TypeScript to the project








// First, let's check if I have TypeScript installed:


// tsc -v

// -bash: tsc: command not found
// That means TypeScript is not installed.












// npm




// If you want to use TS, you need npm,
// so let's first quickly learn what it is.






// npm (Node Package Manager) is a package manager for JavaScript








// let's initialise npm project






// I could do it with 'npm init' command
// but let me show how to do that manually






// All I need is to create package.json file
// with this content:




// {
//     "name": "1",
//     "version": "1.0.0",
//     "main": "script.js",
//     "scripts": {},
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "description": ""
// }





// package.json - heart of an npm project.

// It contains metadata about the project:
//  - Project name, version, description, and author.
//  - Dependencies: External libraries your project needs to run.
//  - DevDependencies: Packages required only during development.
//  - Scripts: Custom commands you can run.









// Now let's install TS as dev dependency in this project

// > npm i typescript --save-dev

// It should be a dev dependency, because it is necessary
// only in development stage.






// This command will create two things:

// - package-lock.json file
// - node_modules folder












// Now let's see if TS was installed

// > tsc -v

// -bash: tsc: command not found

// what?

// That means TypeScript is still not installed.
// Because 'tsc' command tries to use global TS installation.










// If I want to use TS in local project I need npx:

// npx tsc -v












// What is npx?

// npx allows to run binaries locally (from node_modules).

// node_modules - is a folder where all dependencies of my
// project are installed.


// package-lock.json - provides a detailed and exact record
// of the dependency tree installed in a project.

// > ls node_modules











// Installing is not enough, we need to create
// TS settings








// I can run this command:
// > npx tsc --init

// Or I can create my tsconfig.json manually:

// {
//     "compilerOptions": {
//         "outDir": "./dist",
//         "strict": true,
//         "esModuleInterop": true,
//         "skipLibCheck": true,
//         "forceConsistentCasingInFileNames": true
//     },
//     "include": ["*.ts"]
// }


// This is a configuration file for our TS where we can specify
// how and where we want files to be compiled from TS to JS.















// "outDir": "./dist", - where all my compiled JS files will go to.
// "include": ["*.ts"] - which files to compile.










// Now we have TS installed, let's convert JS into TS
// I will make a copy of this file for the sake of example.


// > cp script.js script_ts.ts




// Now let’s run:
// > npx tsc



// Ok, it doesn’t work, why?
// Our JS was working before,
// but TS failed to compile.




// paragraph is possibly null
// and I am trying to assign value
// to the property of null.
// This will crash my app.






// Let's demo the crash.








// Let’s modify JS like this:



// function changeText() {
//     const message = "Hello, you clicked the button!";
//     const paragraph = document.getElementById("demo");
//     paragraph.innerHTML = message;
//     console.log('At this moment app will crash')
//     null.innerHTML = 'andrei';
//     console.log('you never see me or anything below will work')
//     console.log("Text has been changed.");
// }





// Any time I will click on the button,
// this function ‘changeText()’ will run
// and I will get error and app will crash.


// Demo in the browser.









// Ok, thank you, TS,
// you helped me find a bug during
// development stage.

// It is exactly why I am using TS!










// Let’s fix the code in TS:



// function changeText() {
//     const message= "Hello, you clicked the button!";
//     const paragraph = document.getElementById("demo");
//     if (paragraph) {
//         paragraph.innerHTML = message;
//     }
//     console.log("Text has been changed (TS).");
// }



// (move)
// One more thing to note – I can’t use ?. (optional chaining) operator here, because it is left-hand side.
//
//     Paragraph?.innerHTML = message; // will not work



// Now let’s run compiler again:



// > npx tsc








// And we see the result JS file in dist/


// "use strict";
// function changeText() {
//     var message = "Hello, you clicked the button!";
//     var paragraph = document.getElementById("demo");
//     if (paragraph) {
//         paragraph.innerHTML = message;
//     }
//     console.log("Text has been changed.");
// }











// But wait, why the compiled JS code
// has all vars which I was teaching
// you should never use?









// To fix it, we need to specify which
// version of JS the code should be compiled to:





// Add ‘target’: ‘ES6’ to tsconfig.json


// tsconfig.json

// {
//     "compilerOptions": {
//     "outDir": "./dist",
//         "target": "ES6",
//         "strict": true,
//         "esModuleInterop": true,
//         "skipLibCheck": true,
//         "forceConsistentCasingInFileNames": true
// },
//     "include": ["*.ts"]
// }







// Run npx tsc again.

// > npx tsc



// Now a better result:


//     "use strict";
// function changeText() {
//     const message = "Hello, you clicked the button!";
//     const paragraph = document.getElementById("demo");
//     if (paragraph) {
//         paragraph.innerHTML = message;
//     }
//     console.log("Text has been changed.");
// }



// Now that we know how TS is helping
// us let’s talk about other useful features of TS:












// I can add types to my variables now:

// const message: string = "Hello, you clicked the button!";

// I can add type to for the return of my function,
// in this case it doesn’t return anything,
// I will add void

// function changeText(): void { … }









// Other popular primitive types which I can use in TS:

// - number
// - boolean

// const pi: number = 3.14;
// const isDisabled: boolean = true;



// I can specify the types of my arrays:

// const nums: number[] = [1, 2, 3];


// TS allows us to have enums:

// enum Status {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Pending = "PENDING"
// }

// let status: Status;
// status = Status.Active;
// console.log(status);





// There is a special type ‘any’ which I don’t recommend to use, as it removes the benefits of TS typechecking:
//
//
//
//     But for you to know that it is available:
//
//
//
//     let name: any;
//
// name = 3.14;
//
// name = ‘Toronto’;
//
// name = [1, 2, 3];
//
//
//
// while if I had a type for my name, it will not let me break my code:
//
//
//
//     let name: string;
//
// name = 3.14;
//
















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
