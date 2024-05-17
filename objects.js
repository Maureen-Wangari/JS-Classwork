const cup = {
    color: "red",
    shape: "circular",
    weight: "50 grams",
    size: "medium",
    //another object as a data type
    description:{
        drinkType: "tea",
        temperature: "hot"
    },
    //METHODS (functions stored in a property)
    drink: function(){
        console.log("use me to drink");
        console.log(`the main purpose of this cup is to drink ${this.description.temperature} ${this.description.drinkType}`);
    }
};
console.log({color: cup.color});
console.log({size: cup.size});
console.log({temperature: cup.description.temperature});

//adding new properties 
cup.material = 'ceramic'
console.log({cup});
//changing a property
cup.color = 'green'
console.log({cup});
//deleting  a property
delete cup.material
console.log({cup});

cup.drink()


const keys = Object.keys(cup)
console.log({keys});

const values = Object.values(cup)
console.log({values});

Object.keys(cup).forEach(item => {
    console.log({key:item, values:cup[item]});
    
});
