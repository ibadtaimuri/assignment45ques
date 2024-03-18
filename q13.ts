// Ibad Taimuri: 23-Feb-2024
// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

let transportMode = ['Mercedes G-Wagon', "Kawasaki Ninja H2R", 'Nissan GT-R ']
for (let i = 1; i < 2; i++) {
    switch (i) {
        case 1:
            console.log(`${transportMode[0]} is my Dream Vehicle of All`);
        case 2:
            console.log(`I Would Love own ${transportMode[1]}`);
        case 3:
            console.log(`My Favorite car is ${transportMode[2]}`);
    }
}