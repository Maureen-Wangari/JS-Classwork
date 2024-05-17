let fruits = ["Mango", "Banana", "Orange"];

let arr =  new Array(20, 30);

console.log({fruits});
console.log({arr});

console.log('fruits:',fruits[2]);

fruits[2] = "kiwi"
console.log({fruits});


console.log('last item:', fruits[fruits.length-1]);
let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

let addEnd = fruits.push("pawpaw"); //.push adds items at the end of the array
console.log({fruits});

let addStart = fruits.unshift("Pineapple") //.unshift add items to the begining of the array
console.log({fruits});

let removeEnd = fruits.pop(); //.pop removes items at the end of the array
console.log({fruits});

let removeStart = fruits.shift(); //.shift removes items at the begining of the array
console.log({fruits});


let items = [20, 30, 40, 50, 60];
let add = items.reduce((acc, curr)=> acc+ curr);
console.log({add});


let multiply = items.map(item=> item*2)
console.log({multiply});

//let square = items.map(item=> item*item)
//console.log({square});

let square = [];
items.forEach(item=> {
    const multiply = item*item;
    //console.log({multiply});
    square.push(multiply)
});
console.log({square});
