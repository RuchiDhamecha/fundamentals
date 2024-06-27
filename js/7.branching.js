
// {} => block
if(condition) {
    // this block executes only if the condition is true
}

if(true) {
    console.log("true");
} else if (true) {
    console.log("also true");
} else if (true) {
    console.log("also true");
} else {
    console.log("none of the above was true")
}

const age = 27;
const thirdFloorThreshold = 25;
const secondFloorThreshold = 18;


if(age >= thirdFloorThreshold) {
    console.log("third floor");
} else if (age >= secondFloorThreshold) {
    console.log("second floor");   
} else {
    console.log("first floor")
}

// ternary
const message = age >= thirdFloorThreshold ? "third floor" : 
                age >= secondFloorThreshold ? "second floor" : 
                "third floor" ;

console.log(message);


// switch

const chosenPokemon = "pikachu";

switch(chosenPokemon) {
    case "pikachu":
        console.log("I CHOOSE YOU PIKACHU");
        break;
    case "charizard":
        console.log("attack, charizard");
        break;
    case "mewtwo":
        console.log("gooooo mewtwo");
        break;
    default:
        console.log("I dont have this pokemon");
}


