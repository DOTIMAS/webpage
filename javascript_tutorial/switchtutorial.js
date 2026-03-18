/* Switch Statements */

const num = 1;

switch(num){
    case 2:
    case 4:
        console.log("Even Number");
        break;
    case 1:
    case 3:
        console.log("Odd Number");
        break;
        default:
            console.log("Invalid Request");
        break;
}

/* Common Case */
const difference = 1;

switch (difference){
    case 1:
        console.log("Easy");
        break;
    case 2:
        console.log("Medium");
        break;
    case 3:
        console.log("Hard");
        break;
        default:
        console.log("Invalid");
        break;
}

/* Basic Example */
const day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

/* Using String */

const letter = "a";

switch(letter){
    case "a":
    case "A":
        console.log("Apple");
    break;
    case "b":
    case "B":
        console.log("Basketball");
    break;
    default:
        console.log("Unknown Letter");
    break;
}