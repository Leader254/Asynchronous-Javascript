// Rather than wait for completion, a process is told to call another function 
// when the result is ready. This is known as a callback, and it’s passed as 
// an argument to any asynchronous function.
// Callbacls are not asynchronous by nature, but they can be used for asynchronous purposes.

// function greet(name, callback){
//     console.log(`Hi, ${name}!`);
//     callback();
// }

// function callMe(){
//     console.log('I am callback function');
// }

// greet('Samuel',callMe);

// the greet takes in name and callback as the parameters where callback is a function
// function greet(){
//     console.log('Hi, Samuel!');
// }

// function sayName(name){
//     console.log('I am' + ' ' + name);
// }
// setTimeout(greet, 0);
// sayName('Samuel');

function greet1(name1, myFunction){
    console.log('Hi, ' + name1 + '!');
    myFunction();
}

// callback function
function sayName1(){
    console.log('I am callback function');
}
setTimeout(greet1, 2000, 'Samuel', sayName1);

// sayName is passed as a callback function to greet function