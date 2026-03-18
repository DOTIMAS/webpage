/* Using Logical Operator = && */
const age = 18;
const experience = 3;
const language = "C++";

if (age >= 18 && experience > 1 && language === "C#"){
    console.log("Congrats! You are hired");
}else {
    console.log("Sorry you are still not eligible");
}


/* Using Logical Operator = || */

const hasDegree = false;
const EXP = 1;

if (hasDegree || EXP === 1) {
    console.log("You are passed but still need training");
}else console.log("Sorry you need more for your resume");

/* Using Logical Operator = ! 
   Invert the result.
*/
const isTall = true;

 if (!isTall){
     console.log("Wow Toll");
 }else console.log("Shmol");
