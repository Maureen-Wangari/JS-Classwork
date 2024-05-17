const documentElement = document.documentElement;
console.log({documentElement});

console.log('body:', document.body);
console.log('head:', document.head);

// GETTING IN DOM
const container = document.getElementById('container');
console.log('parent:', container.parentElement);
console.log('previousSibling:', container.previousElementSiblingElement);
console.log('nextSibling:', container.nextElementSiblingElement);
console.log('children:', container.children);
console.log('firstChild:', container.firstElementChildElement);
console.log('lastChild:', container.lastElementChildElement);

// UPDATING OUR HEADING FROM "INTRO" IN DOM
const heading = document.getElementById('container-heading');
heading.innerHTML = "Introduction to DOM Manipulation";
heading.style.color = 'red';

// CREATE ELEMENTS IN DOM
const newChild = document.createElement('p');
container.appendChild(newChild);
newChild.innerHTML ='I am the new child'
newChild.setAttribute('class', 'container-new-text');

// DELETING ELEMENTS IN DOM
const lastChild =document.getElementById('container-text');
lastChild.remove();

// CHANGE
const button = document.getElementById('button');
button.style.border = 'none'
button.style.padding = '10px' ,'15px'
button.style.borderRadius = '5px'
button.style.backgroundColor = '#4169E1'
button.style.cursor = "pointer"
button.style.color = '#ffffff'

button.addEventListener('click', function(){
button.innerHTML= ("Clicked!")
button.style.backgroundColor = "#00FF00"
button.style.color = '#000000'
})

