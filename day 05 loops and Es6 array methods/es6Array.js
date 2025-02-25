// map, filter, reduce, reduceRight, find, some, every
const marks = [60, 70, 80, 96, 100];

const double = (el) => {
  return el * 2;
};

// forEach
const doubleMarks2 = marks.forEach((el) => {
  return el * 2;
});

// const doubleMarks = marks.map((el, index, originalArray) => {
//     return originalArray;
// });
// console.log(doubleMarks2);

const numberLessThan18 = marks.filter((el, index, originalArray) => {
  return el < 80;
});

console.log(numberLessThan18);

//reduce
const marksSum = marks.reduce((acc, curr) => {
  return (acc += curr);
}, 0);
console.log(marksSum);

// reduceRight
const result = marks.reduceRight((acc, curr) => {
  return (acc += curr);
}, 0);

console.log(result);

const dummyData = [
  {
    name: "arbaz",
    age: 18,
  },
  {
    name: "aditya",
    age: 20,
  },
  {
    name: "aman",
    age: 22,
  },
];

// find
const foundItem = dummyData.find((el) => {
  return el.age === 20;
});

// some
const isAge20Present = dummyData.every((el) => {
    return el.age === 20;
})

console.log(isAge20Present);