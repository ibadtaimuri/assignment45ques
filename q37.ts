// Large Shirts: Modify the make_shirt() function so that shirts
// are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message,
// and a shirt of any size with a different message.

function makeShirt2(size2: string, message2: string) {
    let lsSize2: string = size2.toLowerCase()
    if (!size2 && !message2) {
        lsSize2 = 'l'
        message2 = 'I Love TypeScript'
        console.log(`Your Order Summary`)
        console.log(`Size: ${lsSize2.toUpperCase()}`)
        console.log(`Message: ${message2}`)
    } else if (lsSize2 == 's' || lsSize2 == 'm' || lsSize2 == 'l' || lsSize2 == 'xl' || lsSize2 == '2xl') {
        console.log(`Your Order Summary`)
        console.log(`Size: ${size2.toUpperCase()}`)
        console.log(`Message: ${message2}`)
    } else {
        console.log(`Invalid Size, please enter correct size`)
    }
}

let size2: string = 's'
let message2: string = 'HALWA in ARABIC'
makeShirt2(size2, message2);
// size2 = 'xl', message2 = "Chehra Uper Hai"
// makeShirt2(size2, message2);
// size2 = 'l', message2 = "Aur Kia chal raha hai?"
size2 = '', message2 = ""
makeShirt2(size2, message2);
size2 = 'm', message2 = 'I Love TypeScript'
makeShirt2(size2, message2);