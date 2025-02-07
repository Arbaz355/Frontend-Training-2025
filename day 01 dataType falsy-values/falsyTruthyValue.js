//falsy
/*
1) null
2) undefined
3) false
4) NaN
5) 0
6) ""
7) -0
8) BigInt
*/

function isEven() {
  if (-0) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isEven();

// short circuit with ||, &&
const data = "" || 0 || "aditya" || null;
const data2 = "arbaz" && "12" && "aditya" && "12";
console.log(data2);

// truly values
/*
true
"a"
"false"
Infinity
New Date()
*/

// new operators in javascript
// ??, .?, ===, >==, <==
