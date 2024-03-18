// Magicians: Make a array of magician’s names. Pass the array to a
// function called show_magicians(), which prints the name of each magician in the array.
let magician: string[] = ['Harry Houdini', 'Criss Angel', 'David Blaine'];
export function show_magicians(magician: string[]) {
    magician.forEach((items: any) => {
        console.log(items)
    })
}

show_magicians(magician);