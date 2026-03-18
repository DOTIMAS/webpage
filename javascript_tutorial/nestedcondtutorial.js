/* Nested Conditional */
const age = 18;
const experience = 3;
const language = "C#"

if (age >= 18){
    console.log("You are not a minor");
        if (experience > 1){
            if (experience >= 3){
                console.log("You are very much qualified for the job");
            }else{
                console.log("You are qualified");
            }
        } else{
          console.log("You are not eligible for hiring");  
        } 
        if (language === "C++"){
            console.log("You are fit for role");
        }else{
            console.log("You need to study C++");
        }
}else{
    console.log("You are a minor");
}