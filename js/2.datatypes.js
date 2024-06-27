// number

const number = 2000;
const integer = 10;
const decimal = 10.5;
const negative = -10;

// console.log is NOT javascript
console.log(typeof integer); // number

// strings
// character(s) a-z, A-Z, 0-9, ~@#$%^&*(*())
// enclosed in '', "", ``
const singleQuotedString = 'this is a string';
const doubleQuotedString = "this is also a string";
const backTickedString = `this is also a string!!`;

console.log(typeof backTickedString); // string

// booleans
const hadBreakfast = false;
const isHungry = true;

console.log(typeof isHungry);

// undefined
const brain = undefined; // NEVER EVER DO THIS.

console.log(typeof brain); // undefined

// null -> PSEUDO TYPE
const girlfriend = null; // NEVER EVER DO THIS.

console.log(typeof girlfriend); // object

// collection datatypes
// elements -> of any datatype, separated by commas, 
// enclosed in []
const numbers = [1, 2, 3, 4];
const names = ["Arpita", "Isha", "Shubham"];

let person = [
    30, 
    "Aniruddha", 
    true, 
    null, 
    undefined,
    [1, 2, 3],
    { city: "Pune", country: "IN" }
];

console.log(typeof person); // object

// object
// key: value pairs (value can be of any datatype)
// keys are always strings
// separated by commas
// enclosed in {}

person = {
    age: 30,
    name: "Aniruddha",
    isHungry: true,
    brain: null,
    girlfriend: undefined,
    hobbies: ["chess", "badminton"],
    address: {
        city: "Pune",
        country: "IN"
    }
}

console.log(typeof person); // object

// functions
function abcd() {
    console.log("abcd");
}

console.log(typeof abcd); // function