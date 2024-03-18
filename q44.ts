// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call
// provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function makeSandwich(...ingrediants: string[]) {
    if (ingrediants.length != 0) {
        console.log("Your Choosen Ingrediants are: ")
        ingrediants.forEach(item => {
            console.log(`* ${item}`)
        })
    } else {
        console.log(`No ingrediants entered!`)
    }
}

makeSandwich('egg', 'mayonise', 'chicken', 'ketchup')
makeSandwich('mayonise', 'chicken', 'ketchup')
makeSandwich('bbq chicken', 'bbq sause', 'mayonise', 'ketchup')
makeSandwich()