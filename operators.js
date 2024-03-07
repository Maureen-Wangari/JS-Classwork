//Arithmetic
let a = 20;
let b = 30;
let add = a + b;
console.log({add})

let subtract = a - b;
console.log({subtract});

let division = a / b;
console.log({division});

let multiply = a * b
console.log({multiply})

//Comparison 
let c = "20";

let looselyEqualTo = a == c;  //only checks for the value not the data type
console.log({looselyEqualTo});

let strictlyEqualTo = a === c; //checks for both data type and value of the variable
console.log({strictlyEqualTo});

let looselyNotEqualTo = a != c;
console.log({looselyNotEqualTo}); // only checks for the value not the data type

let strictlyNotEqualTo = a !== c;
console.log({strictlyNotEqualTo}); // checks for both data type and value of the variable

a+=5;
console.log({a});

//Decreament And Increament Operators
a--;
console.log({a});

a++;
console.log({a});

//Implicit coersion
let d = +c;
console.log({d});
console.log({c});

let e = c*1;
console.log({e});

//Explicit  coersion
let f = Number(c)
console.log({f})

