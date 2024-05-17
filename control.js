const personAge =(age) =>{
    if(age>=18){
        console.log("you are an adult")
    }
    else if(age >13 && age <18){
        console.log( "you are a teenanger")
    }
    else{
        console.log( "you are a child")
    }
}
personAge(19)


//SWITCH CASE STATEMENT
const greeting = (dayOfTheWeek) =>{
    switch(dayOfTheWeek){
        case "Monday":
            console.log("Hello> Monday");
            break;

            case "Tuesday":
            console.log("Hello Tuesday");
            break;

            case "Wednesday":
            console.log("Hello Wednesday");
            break;

            case "Thursday":
            console.log("Hello Thursday");
            break;

            case "Friday":
            console.log("Hello Friday");
            break;

            case "Saturday":
            console.log("Hello Saturday");
            break;

            case "Sunday":
            console.log("Hello Sunday");
            break;

            default:
                console.log("Invalid day of the week");
        }
    }
    greeting("Wednesday")
