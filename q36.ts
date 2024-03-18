// T-Shirt: Write a function called make_shirt() that accepts a size and
// the text of a message that should be printed on the shirt
// The function should print a sentence summarizing the size of the shirt
// and the message printed on it. Call the function.
function make_shirt(size: string, message: string) {
    let lsSize: string = size.toLowerCase()
    if (lsSize == 's' || lsSize == 'm' || lsSize == 'l' || lsSize == 'xl' || lsSize == '2xl') {
        console.log(`Your Order Summary`)
        console.log(`Size: ${size.toUpperCase()}`)
        console.log(`Message: ${message}`)
    } else {
        console.log(`Invalid Size, please enter correct size`)
    }
}

let size: string = 's'
let message: string = 'HALWA in ARABIC'
make_shirt(size, message);
size = 'xl', message = "Chehra Uper Hai"
make_shirt(size, message);