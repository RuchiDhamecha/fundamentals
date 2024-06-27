// blocking code
const add = (n1, n2) => {
    for (let i = 0; i < 100000; i++) { }
}
add(4, 5);
console.log("something");

console.log("before timeout")

// asynchronous
setTimeout(() => {
    console.log("timeout done");
}, 2000);

console.log("after timeout");

for (let i = 0; i < 100000; i++) {
    console.log(i);
}

// Promise

// status
const promiseObj = new Promise((resolve, reject) => {
    reject("this is the data as well");
    // resolve(parameters)
    resolve("this is the data");
    // sets the status of the promiseObj to fulfilled
    // it calls the fn passed to the then method

    console.log("after reject")
    // sets the status of the promiseObj to rejected
});

console.log(promiseObj);

// methods of promiseObj
// then
promiseObj.then(response => {
    console.log(response);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("finally called")
});

// 

const getProducts = (successHandler, errorHandler) => {

    const products = ["P1", "P2", "P3", "P4"];
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            return successHandler(products);
        }

        errorHandler("something went wrong")
    }, 3000);

}

const getPrices = (successHandler, errorHandler) => {

    const prices = [10, 20, 30, 40];
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            return successHandler(prices);
        }

        errorHandler("something went wrong")
    }, 3000);

}

const getUsers = (successHandler, errorHandler) => {

    const users = [1, 2, 3, 4];
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            return successHandler(users);
        }

        errorHandler("something went wrong")
    }, 3000);

}

// CALLBACK HELL
getUsers(users => {
    getProducts(products => {
        getPrices(prices => {

        }, error => {
            console.log(error, 'something bad happened');
            // retry mechanism
        })
    }, error => {
        console.log(error, 'something bad happened');
        // retry mechanism
    })
}, error => {
    console.log(error, 'something bad happened');
    // retry mechanism
});

// with promises

const getUsersWithPromise = () => {
    return new Promise((resolve, reject) => {
        const users = [1, 2, 3, 4];
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                return resolve(users);
            }

            reject("something went wrong")
        }, 3000);
    })
}

const getProductsWithPromise = () => {
    return new Promise((resolve, reject) => {
        const products = ["P1", "P2", "P3", "P4"];
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                return resolve(products);
            }

            reject("something went wrong")
        }, 3000);
    })
}

const getPricesWithPromise = () => {
    return new Promise((resolve, reject) => {
        const duration = Math.random() * 5000;

        const prices = [10, 20, 30, 40, 50];
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                return resolve(prices);
            }

            reject("something went wrong")
        }, duration);
    })
}

const userPromise = getUsersWithPromise();

userPromise.then(users => {
    return getProductsWithPromise()
}).then(products => {
    return getPricesWithPromise()
}).then(prices => {
    // prices
}).catch(err => {

});

// async await
const getUserWithAsync = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        console.log(response, users);
    } catch (e) {
        console.log(e);
    } finally {
        console.log('after success or error');
    }
}

const getUs = async () => {
    await getUserWithAsync();
    console.log("get users done");
}

console.log("abcd");