// Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name - value pairs,
// such as a color or an optional feature.Print the Object that’s returned to make sure
// all the information was stored correctly.
function carCreate(manufacturer: string, model: string, ...anyOther: any[]): any {
    let car: { manufacturer: string; model: string; anyOther: any[] } = {
        manufacturer,
        model,
        ...anyOther[0]
    }
    return car;
}

let car1 = carCreate("Toyota", "Corolla", { 'Color': 'Red', 'ABS': true })
console.log(car1)

// use let and const for variable declaration
// var used in javascript and have block scope limitation
