// example 1

// arrray destructuring
// const numbers = [2,3,4,5,6]

// const [first, second, ...rest] = numbers;

// console.log(first);
// console.log(second);
// console.log(rest);

// example 2
// const person = {
//     name: "Samuel",
//     course: "SWE",
//     skill: "Javascript"
// }

// const {name, course, skill} = person;

// console.log(name);
// console.log(course);
// console.log(skill)

// Swapping variables

let a = 20;
let b = 30;

[a,b] = [b,a];

console.log(a);
console.log(b);