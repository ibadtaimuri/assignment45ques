// Pizzas: Think of at least three kinds of your favorite pizza
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the
//   pizza instead of printing just the name of the pizza.
//   For each pizza you should have one line of output containing a
//   simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop,
//   that states how much you like pizza.The output should consist of three or
//   more lines about the kinds of pizza you like and then an additional sentence,
//   such as I really love pizza!
let favPizza: string[] = ['BBQ Pizza', 'Sicilian Pizza', 'Peri-Peri Pizza']
favPizza.forEach(pizza => {
    console.log(`I Like ${pizza}`)
})
console.log(`I Like Pizza beause of the taste it offers and obviously Cheese. It has a mixure of all
meat, veggies and cheese. It is easy to eat and we don't need to use utensils to eat like no plate or
spoon is requred, so no dish washing.\nI really Love pizza.`)