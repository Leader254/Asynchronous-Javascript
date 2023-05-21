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

// the greet takes in name and callMe() as a callback as the parameters
// function greet(){
//     console.log('Hi, Samuel!');
// }

// function sayName(name){
//     console.log('I am' + ' ' + name);
// }
// setTimeout(greet, 0);
// sayName('Samuel');

// function greet1(name1, myFunction){
//     console.log('Hi, ' + name1 + '!');
//     myFunction();
// }

// // callback function
// function sayName1(){
//     console.log('I am callback function');
// }
// setTimeout(greet1, 2000, 'Samuel', sayName1);

// sayName is passed as a callback function to greet function

// asynchronous callback
// function fetchData(callback){
//     setTimeout(() =>{
//         const data = 'Data from server';
//         callback(data);
//     }, 2000)
// }
// function processData(data){
//     console.log('Processing data:' + ' ' + data);
// }

// fetchData(processData);

// 3rd example
// function that return the square of each number given an array
// function squareEach(array, callback){
//     for(let i = 0; i < array.length; i++){
//         callback(array[i], i);
//     }
// }
// const numbers = [2,3,4,6,7,9];
// squareEach(numbers, (number, index) =>{
//     console.log(number * index)
// });

function getDataFromServer(callback){
    setTimeout(() =>{
        const data = {name: 'Samuel', age: 25};
        callback(null, data)
    }, 2000)
}

function processData(error,data){
    if(error){
        console.error('Error:', error);
    }
    else{
        console.log('Processed Data:',data)
    }
}
getDataFromServer(processData);