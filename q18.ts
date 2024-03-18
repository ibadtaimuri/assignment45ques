//   Ex17: Seeing the World: Think of at least five places in the world you’d like to visit.
// 'Makkah', 'Medina', 'Jeruselum', 'Hunza', 'Aston Martin Factory' (Places I Like to visit)
// • Store the locations in a array.Make sure the array is not in alphabetical order.
let placesToVisit = ['Medina', 'Makkah', 'Jeruselum', 'Hunza', 'Aston Martin Factory'];
// • Print your array in its original order.
console.log(placesToVisit);
// • Print your array in alphabetical order without modifying the actual list.
console.log(`Sorted List without changing Actual List.`);
console.log([...placesToVisit].sort());
// • Show that your array is still in its original order by printing it.
// placesToVisit = ['Makkah', 'Medina', 'Jeruselum', 'Hunza', 'Aston Martin Factory'];
console.log(`Actual List.`);
console.log(placesToVisit);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse List without changing Actual List.`);
let reversedList = [...placesToVisit].reverse();
console.log(reversedList);
// • Show that your array is still in its original order by printing it again.
console.log(`Actual List.`);
console.log(placesToVisit);
// • Reverse the order of your list.Print the array to show that its order has changed.
console.log(`REREVERSED LIST without changing Actual List.`);
let reReversedList = [...reversedList].reverse();
console.log(reReversedList);
// • Reverse the order of your list again.Print the list to show it’s back to its original order.
console.log(`Actual List.`);
console.log(placesToVisit);
// • Sort your array so it’s stored in alphabetical order.Print the array to show
// that its order has been changed.
placesToVisit = placesToVisit.sort();
console.log(`Sorted List :\n`, placesToVisit)
// • Sort to change your array so it’s stored in reverse alphabetical order.
// Print the list to show that its order has changed.
console.log(`REVERSE SORTED List.`);
console.log([...placesToVisit].reverse().sort());