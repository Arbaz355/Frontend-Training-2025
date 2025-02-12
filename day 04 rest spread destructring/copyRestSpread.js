// spread and rest operator ...

// rest operator
function add(a, b, ...restParams) {
    let sum = a+b;

    for(let i=0; i<restParams.length; i++) {
        sum += restParams[i];
    }

    return sum;
}
const result = add(2, 4, 5, 6, 7);
// console.log(result);

//  default values with function
function add2(a, b = 10) {
    return a+b;
}

console.log(add2(2, 4));

// spread operator - copy array, copy object
const arr = [1, 2, 3, 4, 5];

function copyArray(arr) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

const person = {
    name: "arbaz",
    age: 40,
}

const emp = {
  ...person,
  name: "Aman",
};

const newArr = [...arr, 23, 45];

// shallow copy, deep copy
const emp2 = {
    name:"aman",
    age:23,
    salary: 20000,
    address: {
        city: {
            name: "delhi",
            pincode: 110001,
        },
        state: "delhi",
    },
    dob: new Date(),
}

// method 1
const copyEmpData = Object.assign({}, emp2);

// method 2
const copyEmpData2 = {...emp2};
// console.log(copyEmpData2);

//deep copy
const copyEmpData3 = JSON.parse(JSON.stringify(emp2));

const copyEmpData4 = structuredClone(emp2)

console.log(copyEmpData3);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 5, 5];
const mergedArray1 = arr.concat(arr2);

const mergedArray = [...arr1, ...arr2];