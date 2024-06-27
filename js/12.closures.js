const add = (n1, n2) => n1 + n2;

const addition = add(10, 5);
const twenty = add(10, 10);

console.log(addition);

const outerFn = () => {
    const innerFn = () => {

    }

    return innerFn;
}

const innerRef = outerFn();

innerRef();


const counter = (initialValue) => {
    return () => ++initialValue; 
}

const countFrom10 = counter(10);
const countFrom15 = counter(15);
const countFrom20 = counter(20);

countFrom10(); // 11 
countFrom15(); // 16
countFrom20(); // 21

countFrom20(); // 22
countFrom15(); // 17
countFrom10(); // 12 


const updateRate = (updatedValue) => {
    
}

// factory patterns
const loanFactory = (r) => {
    return [
        (p, n) => p * n * r / 100,
        (n) => r = n
    ];
};

const [carLoanCalculator, carLoanInterestUpdater] = loanFactory(10);
const homeLoanCalculator = loanFactory(12);
const personalLoanCalculator = loanFactory(8);

carLoanCalculator(10000, 12); // r 10
carLoanInterestUpdater(11);
carLoanCalculator(10000, 12); // r 11