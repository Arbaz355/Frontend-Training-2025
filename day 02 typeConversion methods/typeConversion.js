// explicit conversion, implicit conversion, type conversion, type coercion

// implicit conversion
const num = 42;

const result = num + +"12";
console.log(result);

const result2 = "";

console.log(!!result2);

// explicit conversion
// 1) number to string (toString(), String())
const num1 = 42;
console.log(typeof String(num1));

// 2) string to number (parseInt(), parseFloat(), Number())
const str = "42.343cvbcvb";

// console.log(typeof Number(str));
console.log(parseFloat(str));

// 3) number to boolean (Boolean()), string to boolean (Boolean())
const num2 = 89;
console.log(!!(num2));

// common type conversion
console.log(5 + null)
console.log(8 + undefined);
"60" + 60 
"60" - 60 
console.log("60" / 2)