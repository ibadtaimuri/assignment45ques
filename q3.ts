// personName Cases: Store a person’s personName in a variable,
// and then print that person’s personName in lowercase, uppercase, and titlecase.
let personName: string = 'Eric'
console.log(`Hello ${personName.toLowerCase()}`)
console.log(`Hello ${personName.toUpperCase()}`)
console.log(`Hello ${personName.charAt(0).toUpperCase() + personName.slice(1)}`)