// City Names: Write a function called city_country() that takes
// in the name of a city and its country.The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city - country pairs, and print the value that’s returned.
function city_country(newCity: string, newCountry: string) {
    return `\"${newCity}, ${newCountry}\"`;
}

let newCity1: string = 'Lahore', newCountry1: string = 'Pakistan';
let newCity2: string = 'Kabul', newCountry2: string = 'Afghanistan';
let newCity3: string = 'Hyderabad', newCountry3: string = 'India';
console.log(city_country(newCity1, newCountry1));
console.log(city_country(newCity2, newCountry2));
console.log(city_country(newCity3, newCountry3));