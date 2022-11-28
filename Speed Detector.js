//declared speed as a function
function hereCar(speed) {
  //converted speed from string to integer
  let carSpeed = parseInt(speed,90)
  //gave constant demerit values through an equation
  const demerit=((carSpeed - 70)/5)
//if statement for speed lees than 70
    if(speed < 70) {
      //prints"OK" if argument is true
     return "OK"
     // if  speed is greater than 70 
    }else
   //if demerits are more or equal to 12
     if(demerit >= 12) //response if trueus
      return "License suspended"
    }



      


//used to run code in visual studio
console.log(hereCar(65))
