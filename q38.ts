// Cities: Write a function called describe_city() that accepts
// the name of a city and its country.The function should print a simple sentence,
// such as Karachi is in Pakistan.Give the parameter for the country
// a default value. Call your function for three different cities,
// at least one of which is not in the default country.
function describe_city(city: string, country = "Pakistan"): string {
    return `${city} is in ${country}`;
}

let city1: string = describe_city('Lahore')
let city2: string = describe_city('Karachi', 'Pak')
let city3: string = describe_city('Tehran', 'Iran')
console.log(city1);
console.log(city2);
console.log(city3);