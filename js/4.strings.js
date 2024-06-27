const greeting = "helooooo";
const name = "prajwal";

// concatenate/join/merge
// OLD WAY +
let fullGreeting = greeting + " " + name;
// helooooo prajwal

// NEW WAY - ES6 way -> PREFERRED WAY
fullGreeting = `${greeting} ${name}`;

// access characters
//  index     0123
let word = "nose";

word[0]; // n
word[3]; // e
word[100]; // undefined
word[-1]; // undefined

// property
// length
word.length; // 4

// modify -> DOES NOT WORK - IMMUTABILITY
word[0] = "p"; // pose
word = "pose"; // WORKS

// methods
// toUpperCase & toLowerCase
word.toUpperCase(); // POSE
word.toLowerCase(); // pose

word.includes("po"); // true

const sentence = "    this is the input from the user     ";
sentence.trim();

const csv = "Aniruddha|80|kothrud";

csv.split("|"); // ["Aniruddha", "80", "kothrud"];

"a, pqrs | lmno ^ laksjfd" // => ["a", "pqrs", "lmno", "laksjfd"]

sentence.replace("this", "these");

