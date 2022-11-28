//used to change result from string to integer
//It is here that a prompt was created
let result =parseInt(prompt("Enter student result:"));

//declares studentGrade as a function
function studentGrade() {
  //condition if result is greator than 79and equal to 100
    if(result > 100) {
        //response in the promp if a number greater that 100 is entered
        alert("enter valid result")   
   //It prints grade "A" if result is greater than and equal to 80
    }else if (result>= 80) {
       return "A"
         //It prints grade "B" if result is greater than and equal to 60
    }else if (result>=60 ) {
        return "B"
          //It prints grade "C" if result is greater than and equal to 49
    }else if(result>=49) {
        return "C"
          //It prints grade "D" if result is greater than and equal to 40
    }else if (result>=40) {
        return "D" 
          //Every grade below 40 prints a "E" grade
    }else{
            return"E"
        } 
    
    }

  //It prints grades in the browser
    studentGrade()