const num = 10
function add (num1, num2){
    const sum = num1 + num2;

    console.log({num});
    console.log({console: sum});
    return{return: sum};  //RAM
}

console.log (add(2, 3)); //CALLBACK FUNCTION(written as an argument to another function so that it can be executed in that other funtion)
add(4, 5);
console.log({num});

//function Expresssions
const subtract= function(num1, num2){
    console.log(num1 - num2);
}
subtract(20, 10);


//arrow functions
const multiply = (num1, num2)=> console.log(num1*num2); 
multiply(5,6);


//IIFEs  (Immediately Invoked Function Expressions)

(function(){
    console.log('IIFEs:', 'Hello')
})();


//







