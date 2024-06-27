// for, while

const string = "this is a string";
const people = ["A", "B", "C"];
const person = { name: "A", age: 20 };

// traditional
for (let index = 0; index < string.length; index++) {
    const char = string[index];
    console.log(char);
}

for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

const personKeys = Object.keys(person);
for (let index = 0; index < personKeys.length; index++) {
    const key = personKeys[index];
    const value = person[key];
    console.log(key, value);
}

// for in loop
for (let index in string) {
    const char = string[index];
    console.log(char);
}

for (let index in people) {
    const element = people[index];
    console.log(element);
}

for (let key in person) {
    const value = person[key];
    console.log(key, value);
}

// for of
for (let char of string) {
    console.log(char);
}

for (let element of people) {
    console.log(element);
}

for (let key of personKeys) {
    const value = person[key];
    console.log(key, value);
}


// while
let index = 0;
while (index < string.length) {
    index++;
}


const peopel = [
    { name: "a", age: 20, isHungry: true }
]

// traditional
for (let index = 0; index < peopel.length; index++) {
    const { age } = peopel[index];
    console.log(age);
}

// for in
for (let index in peopel) {
    const { age } = peopel[index];
    console.log(age);
}

// for of
for (let { age } of peopel) {
    console.log(age);
}

// continue

const tubes = [
    { company: "A", watt: 20, color: "yellow" },
    { company: "B", watt: 30, color: "blue" },
    { company: "C", watt: 40, color: "white" },
    { company: "D", watt: 50, color: "red" },
]

for(let tube of tubes) {
    if(tube.watt === 40) continue;

    console.log(tube);
}

