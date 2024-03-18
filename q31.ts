// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName: string[] = ['admin', 'ibad', 'nazim', 'azeem', 'imran', 'turab'];
// userName.length = 0;
if (userName.length == 0) {
    console.log(`We need to find some users!`)
} else {
    userName.forEach(users => {
        if (users == 'admin') {
            console.log(`Hello ${users}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${users.charAt(0).toUpperCase() + users.slice(1)}, thank you for logging in again`)
        }
    })
}