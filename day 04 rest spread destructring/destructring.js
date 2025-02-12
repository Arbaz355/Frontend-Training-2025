// object destructuring, array destructing
const user = {
  address: "new delhi india",
  age: 43,
  name: "arbaz",
  salary: 10000,
};
// const name = user.name;
// const address = user.address;
// const age = user.age;

// const {name, address, age, salary = 0} = user;

// console.log(salary);

const emp2 = {
  name: "aman",
  age: 23,
  salary: 20000,
  address: {
    city: {
      name: "delhi",
      pincode: 110001,
    },
    state: "delhi",
  },
  dob: new Date(),
};

// const { address:{city:{name}} } = emp2;

const { name: myName, ...rest} = emp2;
console.log(rest);

// array destructuring
const arr = [1, 2, 3, 4, 5];
const [first, second, third = 0, ...restArray] = arr;

console.log(restArray);