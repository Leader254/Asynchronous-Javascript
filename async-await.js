// we use async keyword to represent a function as asynchronous
// we use await keyword to wait for the result of an asynchronous function
// we can use await keyword only inside an async function
// we can use await keyword only with promises

// the async function returns a promise

// Syntax:
// async function functionName(parameters) {
//     // code
// }

// example
// async function myFunction() {
//     console.log("Hello async function");
//     return Promise.resolve(1);
// }
// myFunction().then((result) =>{
//     console.log(result);
// })


// more examples
// 1. function declaration
// async function fetchData() {
//     // fetch data from server
//     return "Data from server";
// }
// declare an async function using the async keyword
// await - pause the execution of a function untill a promise is resolved or rejected
// await keyword can be used only inside an async function

// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     return data;

//     // explanation
//     // By using await, we wait for the promise to resolve before moving to the next line.
//     // Similarly, response.json() returns a promise, and we wait for it to resolve to get 
//     // the actual data.
// }

// hnadling errors in async await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error: ', error);
//         throw error;
//     }
// }
// fetchData()

// await syntax
// let value = await promise;
// the use of await pauses the async function execution until the promise is resolved or rejected

// a promise
// let promise = new Promise ((resolve,reject) =>{
//     setTimeout(() => {
//         resolve("Promise resolved successfully!")
//     }, 4000);
// });

// // async function
// async function myFunction(){
//     // wait until the promise resolves
//     let result = await promise;
    
//     console.log(result);
//     console.log("Hello async function");
// }
// myFunction();

// error handling 
//1. use the catch method to handle errors
// asyncFunc().catch(
//     (err) => {
//         console.log(err);
//     }
// )

// 2. use try catch block
// async function asyncFunc() {
//     try {
//         await promise;
//     } catch (error) {
//         console.log(error);
//     }
// }

// example 
let promise = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve("Promise resolved successfully!");
    }, 2000)
});

// async function
async function myFunction() {
    try {

        // wait until the promise resolves
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
myFunction();