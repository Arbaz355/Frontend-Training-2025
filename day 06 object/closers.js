// inner -> outer , outer -> inner X
function calculation(a, b){
    return {
        addition(){
            return a+b
        },
        multi(){
            return a * b;
        },
    };
}

// function currying
const result = calculation(2, 5);
const additionResult = result.addition();
const multiResult = result.multi();
console.log(multiResult);