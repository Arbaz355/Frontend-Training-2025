// for, while, do while // for in, for of, forEach

const evenNumbers = (arr) => {
  const result = [];

  //for loop
  // for(let i=0; i<arr.length; i++){
  //     if(arr[i] % 2 === 0){
  //         result.push(arr[i])
  //     }
  // }

  //   for of
  //   for (const el of arr) {
  //     if (el % 2 === 0) {
  //       result.push(el);
  //     }
  //   }

  //   for in
  //   for (const index in arr) {
  //     result.push(parseInt(index));
  //   }

  // for each
  arr.forEach((el) => {
    if (el % 2 === 0) {
      result.push(el);
    }
  });

  return result;
};

// const arr = [12, 12, 34, 2, 5];
// console.log(evenNumbers(arr));

const person = {
    name:"arbaz",
    age:40,
    role:"frontend dev"
}

for(const key in person){
    console.log(person[key])
}