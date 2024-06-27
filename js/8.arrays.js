// index         0   1   2   3   4
const numbers = [10, 20, 30, 40, 50];

// properties
numbers.length; // 5

// accessing elements
numbers[0]; // 10
numbers[5]; // undefined
numbers[-1]; // undefined

// modify
// numbers[0] = 0; // 10 => 0
// numbers[100] = 100; NEVER DO THIS

// add elements
// push -> new arr length
numbers.push(60); // [10, 20, 30, 40, 50, 60];

// unshift -> new arr length
numbers.unshift(0); // [0, 10, 20, 30, 40, 50, 60];

// splice accepts 2 or more args
// 1st arg => starting index
// 2nd arg => number of elements to delete
// 3rd arg onwards => elements to add to the array
numbers.splice(2, 0, 25); 
// [0, 10, 20, 25, 30, 40, 50, 60];
// -> the deleted elements as array

// remove elements
// pop -> deleted element
numbers.pop(); // 60
// [0, 10, 20, 25, 30, 40, 50];

// shift-> deleted element
numbers.shift(); // 0
// [10, 20, 25, 30, 40, 50];

numbers.splice(2, 1); // [25]
// [10, 20, 30, 40, 50];


// map, filter, reduce, foreach, find
const nums = [1, 2, 3, 4, 5]; // [1, 2, 3, 4]
const squares = nums.map(n => n ** 2);
const squaresAndCubes = nums.map(n => n % 2 ? n ** 3 : n ** 2);
// [1, 4, 27, 16, 125];

const numbersGreaterThan3 = nums.filter(n => n > 3);

//                      accumulator, current
const sum = nums.reduce((sum, currentElement) => {
    // 10, 5
    return sum + currentElement;
    // => 15
});

nums.forEach(elem => {
    // code...
});


const computers = [
    { name: "a", power: 5000 },
    { name: "b", power: 5432 },
    { name: "e", power: 4987 },
    { name: "d", power: 3999 },
    { name: "e", power: 9000 },
];

computers.find(r => r.name === "e" && r.power > 5000);

// includes
numbers.includes(7); // false

// indexOf
numbers.indexOf(50); // 4
numbers.indexOf(75); // -1

// clones
const monsonFriends = ["Vaishnavi", "Bhavesh", "Shubham"];
// copying the reference
const yuvrajFriends = monsonFriends;
yuvrajFriends.push("Manav");

// SHALLOW CLONE
const prajwalFriends = monsonFriends.slice();

prajwalFriends.push("Amit");


const abhishekFriends = [
    { name: "Ruchi", contact: 1234567890 },
    { name: "Sanika", contact: 78923456 },
];

// SHALLOW CLONE
const vaishnaviFriends = abhishekFriends.slice();

vaishnaviFriends.push(
    { name: 'manali', contact: 987654321 }
);

vaishnaviFriends[0].contact = 678912456789;


// FIND OUT HOW TO DO A DEEP CLONE

// destructuring

const computer = ["16GB", "Lenovo", "i7"];

// OLD WAY  
// const ram = computer[0];
// const make = computer[1];
// const processor = computer[2];

const [ram, make, processor] = computer;
const { 1: abcd, 0: pqrs } = computer;
const [r,,p] = computer;
const [,,pr] = computer;
console.log(ram);

// rest & spread operators
// ...

// rest -> combine elements
const [ra, ...makeAndProcessor] = computer;

// spread -> creates a SHALLOW CLONE
const computerClone = [...computer];

const assignments = ["a1", "a2", "a3"];
const resources = ["r1", "r2", "r3"];
// ["a1", "a2", "a3", "r1", "r2", "r3"]

const assignmentsAndResources = [...assignments, ...resources];