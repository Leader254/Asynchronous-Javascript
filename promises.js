// Promises are a way to handle asynchronous code that is more readable than callbacks.
// Callback hell is a common problem with callbacks, and promises solve this problem.

// Promises are objects that represent the eventual outcome of an asynchronous operation.
// A promise will let you start some work that will be done asynchronously and let you get back to your regular work.
// When you create the promise, you must give it the code that will be run asynchronously.
// You provide this code as an argument to the constructor function:

// Syntax:
// const myPromise = () => {
//     return new Promise((resolve, reject) => {
//         // promise code
//         resolve('Promise resolved successfully!');
//         reject('Promise rejected');
//     });
//     }

// myPromise().then((res) => {
//     console .log(res);
// }, (err) => {
//     console.log(err);
// });

// A better way of writing while using the catch method

// myPromise().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })


// fetch api
// The fetch() method is used to make a request and get a response.
// The fetch() method takes one mandatory argument, the path to the resource you want to fetch.
// It returns a Promise that resolves to the Response to that request, whether it is successful or not.
// You can also optionally pass in an init options object as the second argument (see Request).

// Syntax:
// fetch(url, options)
// .then((response) => {
//     console.log(response);
//     // handle HTTP response
//     response.json();  // promises chaining
// }).then((data) => {
//     console.log(data);
//     // handle the data
// })
// .catch((error) => {
//     console.log(error);
//     // handle general error
// });

// Async and Await
// Async and await are built on top of promises and non-blocking.
// Async functions return a promise.
// Await can only be used inside an async function.
// Async functions make it easier to write promises.
// const getTodos = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     const data = await response.json();
//     return data;
// }
// getTodos().then(todos => {
//     console.log(todos);
// }).catch(err => {
//     console.log(err.message);
// });


// promises are used to find out if an asynchronous operation is successful or not.
// A promise may be in one of three possible states: fulfilled, rejected, or pending.
// A promise start out in a pending state. This means that the final value is yet to be determined.
// If the operation is successful, the process ends in a fulfilled state. 
// And, if an error occurs, the process ends in a rejected state.

// promise takes in a callback function with two parameters, resolve and reject.
// Syntax:
// let promise = new Promise((resolve, reject) => {
//     // promise description
//     // if the promise is successful, call resolve()
//     resolve('Promise resolved successfully!');
//     // if the promise is unsuccessful, call reject()
//     reject('Promise rejected');
// });

// simple program with a promise
// let newNumber = 10;

// const checkNumber =new Promise((resolve, rejected) =>{
//     if(newNumber === "10"){
//         resolve("Promise Successfully resolved");
//     }
//     else{
//         rejected("Promise rejected")
//     }
// })
// console.log(checkNumber)

// If Promise == fullfilled => .then(onFullFillment)
// If Promise == rejected => .catch(onRejection)

// Promise chaining
// Promises are usefull when we have multiple asynchronous operations that need to be executed one after the other.
// We can chain multiple promises together to execute them in a sequence.
// The then() method returns a promise.
// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// then() method takes two arguments, a callback for success and another for failure.
// The catch() method takes only one argument, a callback for failure.
// The finally() method takes only one argument, a callback to be executed when promise is settled.

// Syntax:
// const countValue = new Promise((resolve, reject) => {
//     resolve("Promise resolved successfully!");
// });
// countValue
//     .then(successValue = (result) =>{
//     console.log(result);
//     })
//     .then(successValue1 = () =>{
//     console.log("You can multiply functions this way!");
//     })
    // .catch(failureValue = (error) =>{
    // console.log(error);
    // });

// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
//   });
  
//   // executes when promise is resolved successfully
  
//   countValue
//     .then(function successValue(result) {
//       console.log(result);
//     })
  
//     .then(function successValue1() {
//       console.log("You can call multiple functions this way.");
//     });

// catch method
// the catch is used with the then method to handle the error.
// it is used if the promise is rejected.

// returns a promise
// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected'); 
//  });
 
//  // executes when promise is resolved successfully
//  countValue.then(
//      function successValue(result) {
//          console.log(result);
//      },
//   )
 
//  // executes if there is an error
//  .catch(
//      function errorValue(result) {
//          console.log(result);
//      }
//  );

// finally method
// The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed.

const newValue = new Promise((resolve,reject) =>{
    resolve("Promise resolved successfully")
});

newValue.finally(greet= () =>{
    console.log("Hello World")
})