function sayHi(firstName, repeats) {
  if (parseInt(repeats) > 0) {
    for (var i = 0; i < repeats; i++) {
      switch(firstName) {
        
        case "Jimbo":
          console.log(`Howdy, ${firstName}! Nice to see you again.`);
          break;
          
        case "Susan":
          console.log(`Hey ${firstName}, how is your dog?`);
          break;
          
        default:
          console.log(`Hi, ${firstName}!`);
          break;
      }
    }
  }
  else {
    // If e.g. repeats value is not an integer (will parseInt as zero) or if set to zero. 
    console.log("No repeats!");
  }
}

function addStuff(firstThing, secondThing) {
  return firstThing + secondThing;
}

sayHi(addStuff("Susan", " Beans"), addStuff(4, 3));