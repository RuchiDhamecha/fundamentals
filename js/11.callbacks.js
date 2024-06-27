// callback => fn passed as a parameter


const greetUser = () => 'hello user';
const greetAdmin = () => 'hey admin';

// generic | handle async
const greet = (cb) => {
    // cb is a reference to a fn
    const message = cb();
    console.log(message);
}

greet(greetAdmin);
greet(greetUser);

const map = (array, cb) => {
    const modifiedArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const modifiedElement = cb(element);
        modifiedArr.push(modifiedElement);
    }

    return modifiedArr;
}

const filter = (array, cb) => {
    const modifiedArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const passedTest = cb(element);
        if (passedTest) {
            modifiedArr.push(modifiedElement);
        }
    }

    return modifiedArr;
}


const reduce = (array, callback, initialValue) => {
    initialValue = initialValue || array[0];
    let startingIndex = initialValue ? 0 : 1;
    for(let i = startingIndex; i < array.length; i++) {
        initialValue = callback(initialValue, array[i]);
    }

    return initialValue;
}