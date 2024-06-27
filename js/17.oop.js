

const object = {};

// constructor functions
// arrow functions CANNOT be constructor fns
const Person = (name, age) => {
    this.name = name;
    this.age = age;
}



function Person(name, age) {
    this.name = name;
    this.age = age;

    this.eat = () => {
        console.log(`${this.name} is eating`);
    }

    this.sleep = function () {
        console.log(`${this.name} is sleeping`);
    }
}

const person1 = new Person("a", 21);
person1.eat();
person1.sleep();


const person = {
    name: 'b',
    age: 2,
    sleep: function () {
        console.log(`${this.name} is sleeping`);
    },
    eat: () => {
        console.log(`${this.name} is eating`);
    },
    toString: () => {
        console.log(`${this.name} is ${this.age} years old`);
    },
    methods: {
        sleep: function () {
            console.log(`${this.name} is sleeping`);
        },
        eat: () => {
            console.log(`${this.name} is eating`);
        },
        toString: () => {
            console.log(`${this.name} is ${this.age} years old`);
        }
    }
}


const parent = function () {
    const name = 'pqrs';

    this.obj = {
        check: () => console.log(`${this.name}`)
    }

    return obj;
}

// class

class Building {
    #_name;
    constructor(name, flats, stories) {
        this.#_name = name;
        this.flats = flats;
        this.stories = stories;
    }

    sellFlat() {

    }

    static rate() {
        return 1000;
    }

    get name() {
        // processing
        return this._name;
    }

    set name(value) {
        // validation / proccessing
        this.#_name = value;
    }
}

const b1 = new Building();
b1.name;
b1.target;

class Game {
    static #maze = [
        ['*', '0', '1', '1', '1'],
        ['1', '1', '1', '0', '1'],
        ['0', '1', '0', '1', '1'],
        ['1', '0', '1', '1', '0'],
        ['1', '0', '1', '1', '1'],
    ];
    static #position = [0, 0];
    static #maxRowEdge = this.#maze.length - 1;
    static #maxColumnEdge = this.#maze[0].length - 1 || 0;

    static #move = (edgeToCheckIndex, edge, xOffset, yOffset) => {
        const [x, y] = this.#position
        if (this.#position[edgeToCheckIndex] !== edge && this.#maze[x + xOffset][y + yOffset] === '0') {
            this.#printMaze()
            return;
        }
        this.#maze[x][y] = '1'
        this.#position = [x + xOffset, y + yOffset]
        this.#maze[x + xOffset][y + yOffset] = '*'
        this.#printMaze()
    }

    static #moveDown = () => this.#move(0, this.#maxRowEdge, 1, 0);
    static #moveUp = () => this.#move(0, 0, -1, 0);
    static #moveRight = () => this.#move(1, this.#maxColumnEdge, 0, 1);
    static #moveLeft = () => this.#move(1, 0, 0, -1);
    static #printMaze = () => {
        for (let row of this.#maze) console.log(row);
        console.log("===========================")
    }

    static play(input) {
        const moves = {
            w: this.#moveUp,
            a: this.#moveLeft,
            s: this.#moveDown,
            d: this.#moveRight
        };

        for(let char of input) {
            moves[char] ? moves[char]() : console.log('INVALID MOVE');
        }

        if(
            this.#position[0] === this.#maxRowEdge &&
            this.#position[1] === this.#maxColumnEdge
        ) {
            console.log('YOU WON');
        } else {
            console.log('YOU LOSE');
        }
    }
}

Game.play('wasdasewa')