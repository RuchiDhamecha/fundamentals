// hoisting
console.log(number); // undefined
var number = 10;
console.log(number); // 10

// 
const tdz = () => {
    console.log(primeNumber); // error -> not defined || Cannot access 'primeNumber' before initialization
    let primeNumber = 7;
    console.log(primeNumber); // 
}

tdz();

var one = () => {
    console.log('one');
}

let two = () => {
    one();
    console.log('two');
}

const three = () => {
    two();
    console.log('three');
}


// block / global scoping

for(var i = 0; i < 10; i++) {
    const timeoutId = setTimeout(() => {
        console.log(i)
    }, 1000);
    console.log(timeoutId);
}

for(let i = 0; i < 10; i++) {
    const timeoutId = setTimeout(() => {
        console.log(i)
    }, 1000);
    console.log(timeoutId);
}
loop();
const loop = () => {
    for(var i = 0; i < 10; i++) {
        const timeoutId = setTimeout(() => {
            console.log(i)
        }, 1000);
        console.log(timeoutId);
    }
}