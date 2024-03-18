// Shrinking Guest List: You just found out that your new dinner table won’t
// arrive in time for the dinner, and you have space for only two guests.
//  • Start with your program from Exercise 16. Add a new line that prints a
//    message saying that you can invite only two people for dinner.
//  • Remove guests from your list one at a time until only two names remain in your list.
//    Each time you pop a name from your list, print a message to that person
//    letting them know you’re sorry you can’t invite them to dinner.
//  • Print a message to each of the two people still on your list
//    letting them know they’re still invited.
//  • Remove the last two names from your list, so you have an empty list.
//    Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ['person 1', 'person 2', 'person 3', 'person 4', 'person 5'];
console.log(`\nIt Has been brought into my knowledge that new Table won't arrive.
So, now, I'm Inviting Only 2 People and cutting off the rest.\n`)

guestList.splice(2, 5);
console.log(`${guestList}`)

guestList.forEach(guest => {
    console.log("Dinner Invitation!")
    console.log(`
        Dear ${guest}, you are still invited.
        `);
})
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total Guests: ${guestList.length}`);