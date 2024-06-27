const hobbies = ["a", "b", "c"];
const dynamicKey = ["height", "width"];
const dynamicValue = 5.8;

let cricketPlayer = {
    name: "Mahendra",
    surname: "Dhoni",
    age: 40,
    isGoodCaptain: false,
    battingSkills: undefined,
    keepingSkills: null,
    lastFiveInnings: [0, 0, 0, 0, 0],
    address: {
        city: "Ranchi",
        state: "Jh"
    },
    bat: function () {
        console.log(`${this.name} is out`);
    },
    bowl: () => {
        console.log(`${this.name} cannot bowl`);
    },
    // hobbies: hobbies
    hobbies,
    // dynamicValue => dynamicValue: 5.8
    // dynamicKey: dynamicValue => dynamicKey: 5.8
    [dynamicKey]: dynamicValue // => height: 5.8
}

// access values
// .
cricketPlayer.age; // 40
cricketPlayer["battingSkills"]; // undefined

const key = "surname";
cricketPlayer[key]; // dhoni
cricketPlayer.key; // undefined

// modify
cricketPlayer.battingSkills = 70;
cricketPlayer["age"] = 41;
const anotherKey = "isGoodCaptain";
cricketPlayer[anotherKey] = true;

// add a key
cricketPlayer.key = "some value";
cricketPlayer["favSong"] = "bole jo koyal";
const someKey = "nickname";
cricketPlayer[someKey] = "thala";

// delete
delete cricketPlayer.bowl;

// destructure
const { surname, ...restOfMahi } = cricketPlayer;
cricketPlayer = restOfMahi;

const { address } = cricketPlayer;
const { address: addr } = cricketPlayer;

// methods
cricketPlayer.bat();

cricketPlayer.hasOwnProperty("battingSkills"); // T

// static methods
Object.keys(cricketPlayer); 
// [] of strings
// all TOP level keys of cricketPlayer

Object.values(cricketPlayer);
// [] of any
// all TOP level values of cricketPlayer

Object.entries(); // [[], [], [], []];