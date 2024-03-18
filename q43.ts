// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array
// and store it in a separate array.Call show_magicians() with each array to
// show that you have one array of the original names and one array with
// the Great added to each magician’s name.
import * as mine from './ex42';
let copiedMagicians: string[] = mine.magicians;
console.log(`Original Array of Ex42.ts File`);
console.log(mine.magicians);
console.log(`COPIED Array called from make_great() of Ex42.ts File`);
console.log(mine.make_great(copiedMagicians));
console.log(`COPIED Array called from show_magician() of Ex42.ts File`);
console.log(mine.show_magician(copiedMagicians))