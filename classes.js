class Person{
    constructor(name, age){
        this.name =name;
        this.age = age;

    }
greet(){
    console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);
}
}

const adam = new Person('Adam',30);
console.log({adam});
adam.greet();


//INHERITANCE
class Student extends Person{
    constructor(name, age, school){
        super(name, age) //keyword for inheriting properties//
        this.school = school;}
    profession(){
        console.log(`I am a student at ${this.school}`);
    }
    }

    const student = new Student('Maureen', 19, 'AkiraChix')
    console.log({student});
    student.profession();
    student.greet();


    class weatherForacast{

        constructor(){

this.weatherData = {};

        }

        addCities = function (cityName,humidity,temp,windspeed) {

let cityData = {"humidity":humidity, "temp":temp,"windspeed":windspeed};
            
this.weatherData[cityName] = cityData;

        }



    }

    const city = new weatherForacast()

    city.addCities("nairobi",20,25,10.2)
   city.addCities("kigali",20,25,10.2)

    console.log(city);