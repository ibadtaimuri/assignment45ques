// Ex6: Number Eight: Write addition, subtraction, multiplication, and division
// operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.

//-----------------------------------Comment Open-----------------------------------------
// I Used builtin eval() function which gets String input and evaluate the math operation
// enclosed as String and return the result.
//-----------------------------------Comment Closed--------------------------------------

let addition = `4 + 4`;
let subtraction = '10 - 2';
let multiplication = '4 * 2';
let division = '16 / 2';
console.log(`${addition} = ${eval(addition)}`);
console.log(`${subtraction} = ${eval(subtraction)}`);
console.log(`${multiplication} = ${eval(multiplication)}`);
console.log(`${division} = ${eval(division)}`);