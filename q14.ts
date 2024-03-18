// Ibad Taimuri: 23-Feb-2024
// Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite ?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
// --------------------------------Code--------------------------------------------
let guestList = ['person1', 'person 2', 'person 3'];
guestList.forEach(guest => {
    console.log("Dinner Invitation!")
    console.log(`
        Dear ${guest}, you are coordially invited to dinner at my Place on coming Saturday
        at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
        `);
})