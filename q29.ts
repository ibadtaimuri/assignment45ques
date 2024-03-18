// Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements.Each should check whether a certain kind of fruit is in your array.
//   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits: string[] = ['mango', 'orange', 'peach'];
for (let i = 0; i < 5; i++) {
    if (favorite_fruits.includes(favorite_fruits[i])) {
        console.log(`You really like ${favorite_fruits[i]}!`)
    } else {
        console.log(`No Such fruit in the list`)
    }
}