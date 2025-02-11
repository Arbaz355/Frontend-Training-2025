// function, arrow function -> function (hosting), arrow function

async function fetchData(name) {
  return name;
}

 const fetchData = async (name) => {
  return name;
}

var getName = async function (name) {
  return name;
};

// arrow (single line return, multiline return)
const getName = (name) => name;

const getPersonInfo = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

function add(a, ...restParams) {
  console.log(restParams);
}

// immediately invoked function expression (IIFE)
(function () {
  console.log("IIFE function");
})();

(async () => {
  console.log("IIFE arrow function");
})();