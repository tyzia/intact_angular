











// Plan

// Typescript

// Types
// Interfaces

// CSS
// DevTools
// Specificity
// elements, ids, classes
// Inheritance


















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

// I can add type for the return of my function,
// in this case it doesn’t return anything,
// I will add void

// function changeText(): void { … }









// Other popular primitive types which I can use in TS:

// - number
// - boolean






// Switch to 1/script_ts.ts for demo








// Let's quickly discuss the idea of a contract.





// When we integrate the backend with the frontend,
// we usually talk about a "contract." This means
// that if I, from the UI, call a specific endpoint,
// it will return a specific type or shape of data.
// This is what we refer to as a 'contract.'
// I will trust this contract in the UI and expect
// to receive this type of data from the endpoint.

// The same approach applies in the other direction—
// when I intend to send something from the UI to the backend,
// we again discuss the type of data the backend is ready to consume,
// and this becomes our "contract."

// The word "contract" in this context means that
// it is something we (the UI and backend) have agreed upon
// and should not change or violate.






// TypeScript plays an important role in setting up
// these contracts in the UI because JavaScript doesn't have types.






// TypeScript:

// -- introduced static typing (JS doesn't have it).
// -- allows to explicitly define the shape of data
// -- ensures that the data adheres to that structure at compile time.







// Let's focus not on endpoints, but on internal
// usage of types and concept of a contract.

// It will not happen between UI and backend.
// It will happen between two lines of my own code.





// Syntax to define a type in Typescript


// variable name : typeName

// For example:

// let age: number; // variable 'age' with type 'number'
// let city: string; // type string
// let isActive: boolean; // type boolean






// Example
// I decided that I will be working with number type

// I define my contract:

// let age: number;


// I say "this variable 'age' will accept only numbers"

// next I will create a method to generate age:

// function generateAge(): number {
//  return 18;
// }


// Last but not least, I will assign value to my
// variable based on the method:

// age = generateAge();
// console.log(age);



// Let's compile this code (> npx tsc)
// and check index_ts.html in browser




// Let's break things:
//(in script_ts.ts)

// code:

// let age: number; // 3) change to boolean
// function generateAge(): number { // 2) change to 'string'
//  return 18; // 1) change to '18'
// }
// age = generateAge();
// age += 1;
// console.log(age);

// 1) Change return from 18 to '18'
// TS will show an error.
// the same error will be: > npx tsc
// error TS2322: Type 'string' is not assignable to type 'number'.



// 2) Change return type from number to string
// TS will show an error.


// 3) Change variable type from number to boolean
// TS will show an error.








// Let's do the same in JS:
//(in script.js)

// 1) Change return from 18 to '18'
// No error and result '181' (((









// If I do need to make a change
// I will update contract everywhere:
//(in script_ts.ts)

// code

// let age: string;
// function generateAge(): string {
//  return 'hello';
// }
// age = generateAge();
// age += ' world';
// console.log(age);











// I can have contract with function parameters:
// (in script_ts.ts)

// function isValid(isActive: boolean): void {
//     const isTruthy: boolean = isActive;
// }
// isValid(true);










// To recap I had a contract:

// -- when defined a variable type
// -- when defined function return type
// -- when was returning a value
// -- when defined function parameters










// Array types









// Same way as we had primitive types
// (number, boolean, string)
// we can have array with these types.


// Example
//(in script_ts.ts)

// const nums: number[] = [1, 2, 3];
// const letters: string[] = ['a', 'b', 'c'];
// const booleans: boolean[] = [true, false, false];










// Now let's talk about more complex types








// Define a shape for objects:

// interface Person {
//     name: string;
//     age: number;
// }
// let person: Person = { name: "John", age: 30 };










// any








// type any removes the benefits of TS typechecking.






// 1) Causes run-time errors






// Example
//(in script_ts.ts)

// let data: any = "Hello, World!";
// data = 42; // No error
// console.log(data.toUpperCase()); // Runtime error: toUpperCase is not a function

// Here TS couldn't prevent my app from crashing (((
// All because of 'any' type.









// 2) Allows unexpected results


// Example
//(in script_ts.ts)

// function add(a: any, b: any) {
//     return a + b;
// }
//
// console.log(add(5, 10)); // 15
// console.log(add("5", 10)); // 510

// Here TS couldn't prevent my app from unexpected result (((
// All because of 'any' type.








// More "bad" results:

// -- code less readable

// function processData(data: any) {
//   ...
// }

// What is `data`? A string? An object? A number? Who knows!



// -- no Autocompletion or Intellisense





// Don't use 'any' type.
















// CSS

// Cascading Style Sheets







// We use css to style the html page.



// The most important in CSS is 'cascading' word.

// It means that if there are conflicting style rules
// the last one wins. Or the rules are applied as a cascade.

// By conflicting I mean styles with the same specificity.




// Example CSS:

// p { color: red; }
// p { color: blue; }
// p { color: yellow; }



// Here I have three style rules.
// All set font color of a paragraph 'p'.
// Final color will be 'yellow'
// because it is the last in the queue.


// These styles are considered 'conflicting'
// because they have the same specificity.

// If specificity of style rules is the same
// the latest rule will be applied.






// demo
// (in css/css.html)

// - how to inspect DOM
// - how to interpret CSS styles
// - topmost css rule in the list - the one which is applied
// - crossed out css rule = overridden
// - uncheck one by one and show how color changes
// - uncheck everything and still color is black (default)
// - show Computed tab
// - show how to add styles in browser (color: purple, color: white)
// - show how to update existing css rule value
// - show how to add more styles to existing rule (font-size)
// - show how to delete elements from DOM
// - show how to 'hide' elements in DOM ('h)
// - show how to add elements to DOM (Edit as HTML) (<strong>bold text</strong>)
// - show how to edit text of element
// - show what is margin














// What is specificity









// In devtools if you hover over the rule
// p { color: red; }

// You will see Specificity: (0, 0, 1)








// Specificity determines which rule is more specific
// and thus takes precedence.
// Specificity is calculated based on the types of selectors used.



// Specificity is set in three positions:

// (0, 0, 0)

// or

// (id, class, element)






// ID - is the most important:

// (1,0,0) > (0,0,9)
// (1,0,0) > (0,9,9)
// (1,0,0) > (0,99999,99999)



// CLASS - is second most important:

// (0,1,0) > (0,0,9)
// (0,1,0) > (0,0,999999)



// ELEMENT - is the least important:

// (0,0,0) - will never happen

// (0,0,1) vs (0,0,1) - the last will win
// (0,0,2) > (0,0,1)
// (0,0,3) > (0,0,2)












// Example of specificity of an element:

// p { color: black; } // (0,0,1)
// img { width: 100%; } // (0,0,1)
// h1 { padding: 24px; } // (0,0,1)

// In all these examples:

// 0 for ids
// 0 for classes
// 1 for elements



// Example of specificity other than 1

// div p { color: black; } // (0,0,2)
// div section p { color: black; } // (0,0,3)





// Why specificity matters?




// div p { color: red; } // (0,0,2)
// p { color: black; } // (0,0,1)


// demo (css/specificity.html)






// css syntax: div p { ... }
// means: paragraph inside div

// this rule will not be applied to
// paragraphs outside div.
// The rule selector must match the DOM element.









// Example of specificity 0,1,0


// .myClass { color: blue; } // (0,1,0)

// 0 for ids
// 1 for classes
// 0 for elements




// We use dot (.) to specify a class in CSS







// Example of specificity 0,1,1


// .myClass p { color: purple; } // (0,1,1)

// 0 for ids
// 1 for classes
// 1 for elements












// Inheritance




// demo

// (specificity.html)

// Uncheck all styles for .myClass p and its color
// will remain blue

// Because CSS uses inheritance.
// Child elements inherit styles from parent.








// Example of specificity 1,0,0


// #myId { color: blue; } // (1,0,0)

// 1 for ids
// 0 for classes
// 0 for elements




// We use dot (#) to specify a id in CSS















// CSS rules are applied to HTML elements based on a hierarchy of specificity, source order, and importance. This cascading behavior determines which styles take precedence when multiple rules conflict.










