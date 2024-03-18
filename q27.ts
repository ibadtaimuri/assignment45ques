// Alien Colors #3: Turn your if-else chain from Exercise 5 - 4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed
//   for the appropriate color alien.
function pointsAdd(color: string) {
    if (color == 'green') {
        console.log(`5 Points Added!`)
    } else if (color == 'yellow') {
        console.log(`10 Points Added!`)
    } else {
        console.log(`15 Points Added!`)
    }
}

let alien_color_3: string = 'green';
pointsAdd(alien_color_3);
alien_color_3 = 'red';
pointsAdd(alien_color_3);
alien_color_3 = 'yellow';
pointsAdd(alien_color_3);
