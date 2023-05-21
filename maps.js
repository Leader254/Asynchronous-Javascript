// method is an array method that allows you to iterate over an array and create a
// new array with the results of calling a provided function on each element.
// It transforms each element of the original array based on the logic defined in the 
// callback function. The map() method does not modify the original array; 
// it returns a new array with the transformed elements

// syntax
// Array.map(callback(element,index,array), thisArg);
// callback - fucntion to be executed on each item in the array;
// thisArg - the value to use as 'this' when executing the callback function

// example 1 using arrays
// const numbers = [2,3,4,5,6,7,8];

// const newNumber = numbers.map((num) =>{
//     return num + 5;
// });
// console.log(newNumber)

// example 2 using objects

// const students = [
//     {id: 23, name: "Samuel", course: "SWE"},
//     {id: 24, name: "John", course: "CS"},
//     {id: 25, name: "Moreen", course: "Economics"}
// ]

// const studentsName = students.map((user) =>{
//     return user.name
// })
// console.log(studentsName);

// example 3 using object

const phones = [
    {id: 10, name: "Samsung", price: 10000},
    {id: 11, name: "iPhone", price: 14000},
    {id: 12, name: "Google Pixel", price: 20000}
]

const phonesDiscount = phones.map((phone) => {
    return {
        id: phone.id,
        name: phone.name,
        price: phone.price * 0.8
    }
});

console.log(phonesDiscount);