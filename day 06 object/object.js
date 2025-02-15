// Object.assign, Object.keys, Object.values, Object.entries, Object.freeze, Object.seal, hasOwnProperty, defineProperty

const person = Object.freeze({
  name: "aditya",
  age: 20,
  address: {
    city: "New Delhi",
    pin: 123456,
    street: {
      name: "abc street",
    },
  },
})
// Object.freeze(person);
// person.role = "software dev"
// console.log(person);
// const copyPerson = Object.assign(person, {});
// copyPerson.name = "Arbaz"
// delete copyPerson.age;

// console.log(person.hasOwnProperty("role"));
Object.defineProperty(person, "role", { value: "software dev" });
console.log(person);
