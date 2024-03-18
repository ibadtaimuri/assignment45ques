// Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests.Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';
let num = 45;
let item: string[] = ['item1', 'item2'];
//checking value
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
//checking type
console.log("Is car == 'subaru'? I predict True.")
console.log(car === 'subaru')
//checking AND Statement
console.log("Is num > 30 && num < 50? I predict True.")
console.log(num > 30 && num < 50)
//checking greater than values
console.log("Is num < 30? I predict True.")
console.log(num > 30)
//checking lowercase
console.log("Is car in lowercase ? I predict True.")
console.log(car == car.toLocaleLowerCase())
//checking number greater than or equal
console.log("Is num >= 20 ? I predict True.")
console.log(num >= 20)
//checking if the elements are present in an array
console.log("Is item1 in array ? I predict True.")
console.log(item.includes('item1'))
//checking other value
console.log("Is car == 'toyota'? I predict False.")
console.log(car == 'Toyota')
//checking inequality
console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')
//checking less than values
console.log("Is num < 30? I predict False.")
console.log(num < 30)
//checking OR Statement
console.log("Is num > 50 || num < 30? I predict False.")
console.log(num > 50 || num < 30)
//checking InEquality
console.log("Is car != 'subaru' ? I predict False.")
console.log(car != 'subaru')
//checking car is an array
console.log("Is car an array ? I predict False.")
console.log(Array.isArray(car))
//checking if the elements are present in an array
console.log("Is item3 in array ? I predict False.")
console.log(item.includes('item3'))