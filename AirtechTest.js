// 1. Problem 1 - (A)
// Create an Object with a "hello" method that writes "Hello <name> in the console"

const sayHello = {
    hello(name) {
        console.log(`Hello ${name}`);
    }
}

sayHello.hello("Juanita");

// 2. Problem 1 - (B)
// How would you make name inmutable? (Can write or just describe)

// I can use Object.freeze() to make the object immutable to prevent future changes
// for example

const immutableName = Object.freeze({name: "Juanita"});

// 3. Problem 2
// Write a funtion that logs the 5 cities that occur the most in the array below in
// order from the most number of occurrences to least.

const citiesList = [
    "nasville",
    "nasville",
    "los angeles",
    "nasville",
    "Madrid",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "Madrid",
    "canary islands",
    "barcelona",
    "Madrid",
    "Madrid",
    "nasville",
    "barcelona",
    "london",
    "berlin",
    "Madrid",
    "nasville",
    "london",
    "Madrid",
    "Madrid",
]


function logTopFiveCities(citiesList) {
    const cityCounts = citiesList.reduce((acc, city) => {
        acc[city] = (acc[city] || 0) + 1;
        return acc;
    }, {});

    const sortedCities = Object.entries(cityCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    sortedCities.forEach(([city, count]) => {
        console.log(`${city}: ${count}`);
    });
}

logTopFiveCities(citiesList);