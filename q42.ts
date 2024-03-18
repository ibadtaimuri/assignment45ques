// Great Magicians: Start with a copy of your program from Exercise 40.
// Write a function called make_great() that modifies the array of magicians
// by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.
export let magicians: string[] = ['Harry Houdini', 'Criss Angel', 'David Blaine'];
export function show_magician(magicians: string[]) {
    magicians.forEach((item: any) => {
        console.log(item)
    })
}
export function make_great(magicians: string[]) {
    let greatMagicians: string[] = [];
    magicians.forEach(names => {
        greatMagicians.push(`the Great ${names}`)
    })
    console.log(greatMagicians)
}

// show_magician(magicians);
// make_great(magicians);
