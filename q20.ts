// They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items.
interface Car {
    brand: string;
    model: string;
    year: number;
}

const corolla: Car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023
}
console.log(corolla);

