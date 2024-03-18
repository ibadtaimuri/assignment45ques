// More Guests: You just found a bigger dinner table,
// so now more space is available.Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
//      Add a print statement to the end of your program informing people
//      that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
let guestList = ['person 1', 'person 2', 'person 3', 'person 4', 'person 5'];
// for (let i = 1; i < 2; i++) {
//     switch (i) {
//         case 1:
//             console.log(`Dinner Invitation!`)
//             console.log(`
//                 Dear ${guestList[0]}, you are coordially invited to dinner at my Place on coming Saturday
//                 at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
//             `);
//         case 2:
//             console.log(`Dinner Invitation!`)
//             console.log(`
//                 Dear ${guestList[1]}, you are coordially invited to dinner at my Place on coming Saturday
//                 at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
//             `);
//         case 3:
//             console.log(`Dinner Invitation!`)
//             console.log(`
//                 Dear ${guestList[3]}, you are coordially invited to dinner at my Place on coming Saturday
//                 at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
//             `);
//         case 4:
//             console.log(`Dinner Invitation!`)
//             console.log(`
//                 Dear ${guestList[4]}, you are coordially invited to dinner at my Place on coming Saturday
//                 at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
//             `);
//     }
// }

console.log(`Dear All, This is inform you all that, I've Found a BIGGER Dinner table.
So now I'll be inviting more Guests.`)

let firstAdd = guestList.unshift('person 6');
let middleAdd = guestList.splice(3, 0, 'person 3');
let lastAdd = guestList.push('person 7')
//Checking List, Sorting the List and Updating the same List instead of making new List.
console.log(`${guestList}`)
guestList = guestList.sort();
console.log(`${guestList}`)
//Sending Invitation to all Guests Again.
guestList.forEach(guests => {
    console.log(`Dear ${guests}, You are Co-ordially Invited to the Dinner at my Place
    on Satruday dated 01-Mar-2024. Your presence would be an Honor for me.\n`)
});