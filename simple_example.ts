interface Person {
    name : String,
    age : number
}

const printPerson = (person : Person) => {
    console.log(`Hello ${person.name} who is ${person.age} years old`)
}

printPerson({name : 'Anwesh', age : 26})
