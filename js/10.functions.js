
// non parameterized, non returning
function greet(/**parameters */) {
    // body of the function
    console.log('helooooooo');
}

greet; // REFERENCE OF THE FUNCTION
greet(); // EXECUTING

// parameterized, non returning
function greetPerson(name) {
    // name = 'Manav'
    const message = `HELLLLOOOOOOOO ${name}`;
    console.log(message);
}

greetPerson('Manav');

// non parameterized, returning
function getGreeting() {
    return 'HELLOOOOOO'; 
    // STOPS execution of the function
    const abcd = 10;
}

const greeting = getGreeting();
console.log(greeting);

function getPersonalGreeting(name) {
    return `HELLLLOOOOOOOO ${name}`;
}

const message = getPersonalGreeting('abcd');

// function expression
const add = function(n1, n2) {
    return n1 + n2;
}



add; // REFERENCE to the function expression
add(); // NaN // NOT => error | required 2 args found 0 | undefined | fn not defined | reference error
add(1); // NaN
add(2, 3, 5, 6)

// 
const subtract = (n1, n2) => {
    return n1 - n2;
}

subtract(7, 5); // 2

// 1. if only 1 param => omit ()
// 2. if only 1 statement => omit {}
      //  omit return keyword
const multiplyBy5 = n => n * 5;

function check(list, age){
    return list.includes(age);
}

const checkAge = function(list, age){
    return list.includes(age);
}

const hasAge = (list, age) => list.includes(age);