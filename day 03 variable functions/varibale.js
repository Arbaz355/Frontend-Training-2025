// var, let, const -> temporal dead zone // hosting, block scope, global scope

function add(a, b) {
  const arguments = [1, 4, 5];
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  if (sum === 0) {
    var abc = "arbaz";
  }

  abc = "aditya"

  console.log(abc);
}
add();