// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
// . Start with your program from Exercise 14. Add a print statement at the end of your
//   program stating the name of the guest who can’t make it.
// . Modify your list, replacing the name of the guest who can’t make it
//   with the name of the new person you are inviting.
// . Print a second set of invitation messages, one for each person who is still in your list.

let guestList = ['person 1', 'person 2', 'person 3', 'person 4', 'person 5'];
for (let i = 1; i < 2; i++) {
    switch (i) {
        case 1:
            console.log(`Dinner Invitation!`)
            console.log(`
                Dear ${guestList[0]}, you are coordially invited to dinner at my Place on coming Saturday
                at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
            `);
        case 2:
            console.log(`Dinner Invitation!`)
            console.log(`
                Dear ${guestList[1]}, you are coordially invited to dinner at my Place on coming Saturday
                at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
            `);
        case 3:
            console.log(`Dinner Invitation!`)
            console.log(`
                Dear ${guestList[3]}, you are coordially invited to dinner at my Place on coming Saturday
                at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
            `);
        case 4:
            console.log(`Dinner Invitation!`)
            console.log(`
                Dear ${guestList[4]}, you are coordially invited to dinner at my Place on coming Saturday
                at 7PM. Your presence would be source of honor for me. Looking forward to meet you.
            `);
    }
}
let removed = guestList.splice(2, 1);
console.log(`
        ${removed}, has other plan, on the mentioned day and time.
        So now inviting ${guestList[guestList.length - 1]} instead of ${removed}
        `)