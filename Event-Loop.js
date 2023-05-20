// Stacks and Queues
// JavaScript code that does not use any asynchronous 
// Web APIs will execute in a synchronous manner—one at a time, sequentially.
// The call stack is a data structure that records function calls.
// The event loop is a process that monitors the call stack and the callback queue.

// Example 1
// function first (){
//     console.log('I will run first')
// }
// function second (){
//     console.log('I will run second')
// }
// function third (){
//     console.log('I will run third')
// }
// first()
// second()
// third()

// When we run this code, we get the following output synchronously:
// I will run first
// I will run second
// I will run third

// Example 2
function first (){
    console.log('I will run first')
}
function second (){
    setTimeout(() => {
        console.log('I will run')
    }, 1000)
}
function third (){
    console.log('I will also run')
}

first();
second();
third();

// Add first() to the stack, run first() which logs 1 to the console, remove first() from the stack.
// Add second() to the stack, run second().
// Add setTimeout() to the stack, run the setTimeout() Web API which starts a timer and adds the anonymous function to the queue, remove setTimeout() from the stack.
// Remove second() from the stack.
// Add third() to the stack, run third() which logs 3 to the console, remove third() from the stack.
// The event loop checks the queue for any pending messages and finds the anonymous function from setTimeout(), adds the function to the stack which logs 2 to the console, then removes it from the stack.

// When we run this code, we get the following output:
// I will run first
// I will also run 
// I will run === after 1 second but doesn't block the third function from executing

