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










// Example of interface

// Let's imagine we agreed that backend
// will return User object to the UI with the
// following properties:

// id (number)
// name (string)
// isActive (boolean)


// Based on this I will create a "contract"
// of interface in TS:





// interface User {
//     id: number;
//     name: string;
//     isActive: boolean;
// }



// Now when I fetch data from endpoint
// I will use my interface:



// let response: User;
// const fetchData = async (): Promise<User> => {
//   const result = await fetch('/some/api/');
//   const data = await result.json();
//   return data as User;
// }

// fetchData().then(data => response = data).catch(err => console.log(err));


// const fetchData = () => {
//     fetch('/some/api/')
//         .then((result) => result.json()) // Parse the JSON
//         .then((data) => {
//             console.log(data); // Logs the parsed JSON object
//         })
//         .catch((err) => {
//             console.error('Error:', err);
//         });
// };





// Example function to fetch user data from the backend
// async function fetchUser(userId: number): Promise<User> {
//     const response = await fetch(`/api/users/${userId}`);
//     const data = await response.json();
//
//     // Assuming the backend adheres to the contract
//     return data as User;
// }